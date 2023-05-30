import { Resource as Entity, TABLE_ATTRIBUTES, TABLE_NAME } from '~/model/Resource';
import { search as searchTopic } from '~/model/Topic';
import { search as searchUser } from '~/model/User';
import db from '~/resource/db';
import type { ResourceType as ObjectType } from '~/model/Resource';

const getObjectKeyValues = (obj) => {
  const keys = Object.keys(obj);
  const values = keys.map(key => `${obj[key]}`);
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
  
  await db.execute(query, obj.getAttributeValues());
}

async function readAll() {
  const query = `SELECT * FROM ${TABLE_NAME}`;
  const [rows] = await db.execute(query);
  
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
  const attributePlaceholder = Object
    .keys(criteriaObj)
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    DELETE FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;

  await db.execute(query, Object.values(criteriaObj));
}

async function addTopic(criteriaObj:{topicId:number, resourceId:number, createdByUserId:number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(() => '?')
    .join(',');

  const query = `
    INSERT INTO ResourceTopic (${keys.join(',')})
    VALUES (${attributePlaceHolder})
  `;

  await db.execute(query, values);
}

async function eraseTopic(criteriaObj:{topicId:number, resourceId:number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceholder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    DELETE FROM ResourceTopic
    WHERE ${attributePlaceholder}
  `;
  
  await db.execute(query, values);
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

  const [rows] = await db.execute(query, Object.values(criteriaObj));
  return await hydrate(rows);
}

async function searchResourceTopic(criteriaObj:{resourceId: number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

    const query = `
      SELECT topicId FROM ResourceTopic
      WHERE ${attributePlaceHolder}
    `;

    const [rows, response] = await db.execute(query, values);

    if (rows.length === 0) {
      return [];
    }

    return Promise.all(rows.map(async (row) => {
      const topics = await searchTopic({id: row.topicId});
      return topics[0];
    }));
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
    const topics = await searchResourceTopic({resourceId: id});

    return new Entity({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      topics,
    });
  }));
}

export {
  create,
  readAll,
  update,
  erase,
  addTopic,
  eraseTopic,
  search,
};
