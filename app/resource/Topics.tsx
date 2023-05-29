import { search as searchUser } from '~/model/User';
import { TABLE_ATTRIBUTES, TABLE_NAME, Topic as Entity } from '~/model/Topic';
import { search as searchProjects } from '~/model/Project';
import db from '~/resource/db';
import type { TopicType as ObjectType } from '~/model/Topic';

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

async function addProject(criteriaObj:{projectId:number, topicId:number, createdByUserId:number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(() => '?')
    .join(',');

  const query = `
    INSERT INTO ProjectTopic (${keys.join(',')})
    VALUES (${attributePlaceHolder})
  `;

  await db.execute(query, values);
}

async function eraseProject(criteriaObj:{projectId:number, topicId:number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceholder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    DELETE FROM ProjectTopic
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

async function searchProjectTopic(criteriaObj:{organizationId: number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

    const query = `
      SELECT projectId FROM ProjectTopic
      WHERE ${attributePlaceHolder}
    `;

    const [rows, response] = await db.execute(query, values);

    if (rows.length === 0) {
      return [];
    }

    return Promise.all(rows.map(async (row) => {
      const projects = await searchProjects({id: row.projectId});
      return projects[0];
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
    const projects = await searchProjectTopic({topicId: id});

    return new Entity({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      createdAt,
      updatedAt,
      projects,
    });
  }));
}

export {
  create,
  readAll,
  update,
  erase,
  addProject,
  eraseProject,
  search,
};
