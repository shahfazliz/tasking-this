import type { OrganizationType as ObjectType } from '~/model/Organization';
import { Organization as Entity, TABLE_ATTRIBUTES, TABLE_NAME } from '~/model/Organization';
import { search as searchUsers } from '~/resource/Users';
import createConnection from './db';

async function create(obj:ObjectType) {

  const attributePlaceHolder = Array
    .from({length: TABLE_ATTRIBUTES.length}, (_, index) => '?');

  const query = `
    INSERT INTO ${TABLE_NAME} (${TABLE_ATTRIBUTES.join(',')})
    VALUES (${attributePlaceHolder.join(',')})
  `;
  
  const connection = await createConnection();
  const [result] = await connection.execute(query, obj.getAttributeValues());

  const queryUserOrg = `
    INSERT INTO UserOrganization (userId, organizationId, createdByUserId)
    VALUES (?,?,?)
  `;

  const connectionUserOrg = await createConnection();
  await connectionUserOrg.execute(queryUserOrg, [obj.createdBy.id, result.insertId, obj.createdBy.id]);
  await connectionUserOrg.end();
}

async function readAll(criteriaObj = {}) {

  const query = Object.keys(criteriaObj).length
    ? `SELECT * FROM ${TABLE_NAME} WHERE ` + Object
      .keys(criteriaObj)
      .map((column) => `${column}='${criteriaObj[column]}'`)
      .join(' AND ')
    : `SELECT * FROM ${TABLE_NAME}`;

  const connection = await createConnection();
  const [rows] = await connection.execute(query);
  await connection.end();
  
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
  
  const connection = await createConnection();
  await connection.execute(query, [...obj.getAttributeValues(), obj.id]);
  await connection.end();
}

async function erase(criteriaObj) {
  const attributePlaceholder = Object
    .keys(criteriaObj)
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    DELETE FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;

  const connection = await createConnection();
  await connection.execute(query, Object.values(criteriaObj));
  await connection.end();
}

async function search(criteriaObj) {

  const attributePlaceholder = Object
    .keys(criteriaObj)
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    SELECT * FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;

  const connection = await createConnection();
  const [rows] = await connection.execute(query, Object.values(criteriaObj));
  await connection.end();
  
  return await hydrate(rows);
}

async function searchUserOrganization(criteriaObj:{organizationId: number}) {
  const attributePlaceHolder = Object
    .keys(criteriaObj)
    .map(column => `${column}=?`)
    .join(' AND ');

    const query = `
      SELECT userId FROM UserOrganization
      WHERE ${attributePlaceHolder}
    `;

    const connection = await createConnection();
    const [rows] = await connection.execute(query, Object.values(criteriaObj));
    await connection.end();

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
  search,
};
