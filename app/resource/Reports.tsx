import type { ReportType as ObjectType } from '~/model/Report';
import { Report as Entity, TABLE_ATTRIBUTES, TABLE_NAME } from '~/model/Report';
import createConnection from '~/resource/db';
import { search as searchUser } from '~/resource/Users';

async function create(obj:ObjectType) {

  const attributePlaceHolder = Array
    .from({length: TABLE_ATTRIBUTES.length}, (_, index) => '?');

  const query = `
    INSERT INTO ${TABLE_NAME} (${TABLE_ATTRIBUTES.join(',')})
    VALUES (${attributePlaceHolder.join(',')})
  `;
  
  const connection = await createConnection();
  await connection.execute(query, obj.getAttributeValues());
  await connection.end();
}

async function readAll() {
  const query = `SELECT * FROM ${TABLE_NAME}`;
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

async function hydrate(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    createdAt,
    updatedAt,
  }) => {

    const createdByUsers = await searchUser({id: createdByUserId});
    const updatedByUsers = await searchUser({id: updatedByUserId});

    return new Entity({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
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
