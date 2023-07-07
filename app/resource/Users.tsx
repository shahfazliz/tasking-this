import type { UserType as ObjectType } from '~/model/User';
import { TABLE_ATTRIBUTES, TABLE_NAME, User as Entity } from '~/model/User';
import { search as searchRole } from '~/model/Role';
import { search as searchOrg } from '~/model/Organization';
import { search as searchProj } from '~/model/Project';
import { search as searchTop } from '~/model/Topic';
import { search as searchTas } from '~/model/Task';
import db from './db';

const getObjectKeyValues = (obj) => {
  const keys = Object.keys(obj);
  const values = keys.map(key => obj[key]);
  return {
    keys,
    values,
  };
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

async function search(criteriaObj) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceholder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    SELECT * FROM ${TABLE_NAME}
    WHERE ${attributePlaceholder}
  `;

  const [rows] = await db.execute(query, values);
  
  return await hydrate(rows);
}

async function searchRoles(criteriaObj: {userId: number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

    const query = `
      SELECT roleId FROM UserRole
      WHERE ${attributePlaceHolder}
    `;

    const [rows, response] = await db.execute(query, values);

    if (rows.length === 0) {
      return [];
    }

    return Promise.all(rows.map(async (row) => {
      const roles = await searchRole({id: row.roleId});
      return roles[0];
    }));
}

async function searchOrganization(criteriaObj:{userId: number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

    const query = `
      SELECT organizationId FROM UserOrganization
      WHERE ${attributePlaceHolder}
      UNION
      SELECT id AS organizationId FROM Organizations
      WHERE createdByUserId=${criteriaObj.userId}
    `;

    const [rows, response] = await db.execute(query, values);

    if (rows.length === 0) {
      return [];
    }

    return Promise.all(rows.map(async (row) => {
      const organizations = await searchOrg({id: row.organizationId});
      return organizations[0];
    }));
}

async function searchProject(criteriaObj:{userId: number}) {
  const {keys, values} = getObjectKeyValues(criteriaObj);

  const attributePlaceHolder = keys
    .map(column => `${column}=?`)
    .join(' AND ');

  const query = `
    SELECT projectId FROM UserProject
    WHERE ${attributePlaceHolder}
    UNION
    SELECT id AS projectId FROM Projects
    WHERE createdByUserId=${criteriaObj.userId}
  `;

  const [rows, response] = await db.execute(query, values);

  if (rows.length === 0) {
    return [];
  }

  return Promise.all(rows.map(async (row) => {
    const projects = await searchProj({id: row.projectId});
    return projects[0];
  }));
}

async function searchTopic(criteriaObj:{userId: number}) {
  const query = `
    SELECT pt.topicId FROM ProjectTopic pt
    INNER JOIN UserProject up ON up.projectId = pt.projectId
    WHERE up.userId=?
    UNION
    SELECT id AS topicId FROM Topics
    WHERE createdByUserId=?
  `;

  console.log('query:', query);

  const strUserId = `${criteriaObj.userId}`;
  const [rows, response] = await db.execute(query, [strUserId, strUserId]);

  if (rows.length === 0) {
    return [];
  }

  return Promise.all(rows.map(async (row) => {
    const topics = await searchTop({id: row.topicId});
    return topics[0];
  }));
}

async function searchTask(criteriaObj:{userId: number}) {
  const query = `
    SELECT tt.taskId FROM TaskTopic tt
    INNER JOIN ProjectTopic pt ON pt.topicId = tt.topicId
    INNER JOIN UserProject up ON up.projectId = pt.projectId
    WHERE up.userId=?
    UNION
    SELECT id AS taskId FROM Tasks
    WHERE createdByUserId=?
  `;

  console.log('query:', query);

  const strUserId = `${criteriaObj.userId}`;
  const [rows, response] = await db.execute(query, [strUserId, strUserId]);

  if (rows.length === 0) {
    return [];
  }

  return Promise.all(rows.map(async (row) => {
    const tasks = await searchTas({id: row.taskId});
    return tasks[0];
  }));
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
  searchRoles,
  searchOrganization,
  searchProject,
  searchTopic,
  searchTask,
};
