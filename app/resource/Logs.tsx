import type { LogType as ObjectType } from '~/model/Log';
import { Log as Entity, TABLE_ATTRIBUTES, TABLE_NAME } from '~/model/Log';
import createConnection from './db';

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
  
  return rows.map((row) => new Entity(row));
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
  return rows;
}

export {
  create,
  readAll,
  update,
  erase,
  search,
};
