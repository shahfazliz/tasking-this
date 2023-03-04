import type { OrganizationType as ObjectType } from '~/model/Organization';
import { Organization as Entity, TABLE_ATTRIBUTES, TABLE_NAME } from '~/model/Organization';
import { search as searchUsers } from '~/model/User';
import db from '~/resource/db';

const getObjectKeyValues = (obj) => {
  const keys = Object.keys(obj);
  const values = keys.map(key => obj[key]);
  return {
    keys,
    values,
  }
}

async function create(obj:ObjectType) {
  const attributePlaceHolder = Array
    .from({length: TABLE_ATTRIBUTES.length}, (_, index) => '?');

  const query = `
    INSERT INTO ${TABLE_NAME} (${TABLE_ATTRIBUTES.join(',')})
    VALUES (${attributePlaceHolder.join(',')})
  `;
  
  const [result, response] = await db.execute(query, obj.getAttributeValues());

  const queryUserOrg = `
    INSERT INTO UserOrganization (userId, organizationId, createdByUserId)
    VALUES (?,?,?)
  `;

  await db.execute(queryUserOrg, [obj.createdBy.id, result.insertId, obj.createdBy.id]);
}

async function readAll(criteriaObj = {}) {

  const query = Object.keys(criteriaObj).length
    ? `SELECT * FROM ${TABLE_NAME} WHERE ` + Object
      .keys(criteriaObj)
      .map((column) => `${column}='${criteriaObj[column]}'`)
      .join(' AND ')
    : `SELECT * FROM ${TABLE_NAME}`;

  const [rows, response] = await db.execute(query);
  
  return await hydrate(rows);
}

async function update(obj:ObjectType) {
  const attributePlaceHolder = Array
    .from({length: TABLE_ATTRIBUTES.length}, (_, index) => `${TABLE_ATTRIBUTES[index]}=?`);
  
  const query = `
    UPDATE ${TABLE_NAME} 
    SET ${attributePlaceHolder.join(',')}
    WHERE id = ?
  `;
  
  await db.execute(query, [...obj.getAttributeValues(), obj.id]);
}

async function erase(criteriaObj) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceholder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    DELETE FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;

  await db.execute(query, values);
}

async function eraseUser(criteriaObj:{userId:number, organizationId:number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceholder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    DELETE FROM UserOrganization
    WHERE ${attributePlaceholder}
  `;
  
  await db.execute(query, values);
}

async function search(criteriaObj) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceholder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    SELECT * FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;

  const [rows, response] = await db.execute(query, values);

  return await hydrate(rows);
}

async function searchUserOrganization(criteriaObj:{organizationId: number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

    const query = `
      SELECT userId FROM UserOrganization
      WHERE ${attributePlaceHolder}
    `;

    const [rows, response] = await db.execute(query, values);

    if (rows.length === 0) {
      return [];
    }

    return Promise.all(rows.map(async (row) => {
      const users = await searchUsers({id: row.userId});
      return users[0];
    }));
}

async function hydrate(rows:[]) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt,
  }) => {

    const createdByUsers = await searchUsers({id: createdByUserId});
    const updatedByUsers = await searchUsers({id: updatedByUserId});
    const users = await searchUserOrganization({organizationId: id});

    return new Entity({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      users,
    });
  }));
}

export {
  create,
  readAll,
  update,
  erase,
  eraseUser,
  search,
};
