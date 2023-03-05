import type { TaskType as ObjectType } from '~/model/Task';
import { TABLE_ATTRIBUTES, TABLE_NAME, Task as Entity } from '~/model/Task';
import { search as searchTaskStatus } from '~/model/TaskStatus';
import { search as searchUser } from '~/model/User';
import db from '~/resource/db';

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

async function hydrate(rows) {
  return Promise.all(rows.map(async ({
    id,
    name,
    description,
    createdByUserId,
    updatedByUserId,
    assignedToUserId,
    taskStatusId,
    isImportant,
    isUrgent,
    timeEstimate,
    createdAt,
    updatedAt,
  }) => {

    const createdByUsers = await searchUser({id: createdByUserId});
    const updatedByUsers = await searchUser({id: updatedByUserId});
    const assignedToUsers = await searchUser({id: assignedToUserId});
    const taskStatuses = await searchTaskStatus({id: taskStatusId});

    return new Entity({
      id,
      name,
      description,
      createdBy: createdByUsers[0],
      updatedBy: updatedByUsers[0],
      assignedTo: assignedToUsers[0],
      taskStatus: taskStatuses[0],
      isImportant,
      isUrgent,
      timeEstimate,
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
