import type { UserType as ObjectType } from '~/model/User';
import { TABLE_ATTRIBUTES, TABLE_NAME, User as Entity } from '~/model/User';
import createConnection from '~/resource/db';

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
    email,
    hashPassword,
    createdAt,
    updatedAt,
  }) => {
    return new Entity({
      id,
      name,
      email,
      hashPassword,
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
