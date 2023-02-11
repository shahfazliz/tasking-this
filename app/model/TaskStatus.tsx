import {
  create as createTaskStatus, erase as eraseTaskStatus,
  search as searchTaskStatus, update as updateTaskStatus
} from '~/resource/TaskStatus';
import type { UserType } from './User';

const TABLE_NAME = 'TaskStatus';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

interface TaskStatusType {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => TaskStatusType;
  udpate: () => TaskStatusType;
}

function TaskStatus(obj:TaskStatusType) {
  return this.set(obj);
}

function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => {
    switch (attribute) {
      case 'createdByUserId': return this.createdBy.id;
      case 'updatedByUserId': return this.updatedBy.id;
      default: return this[attribute];
    }
  });
}

function set(obj) {
  Object
    .keys(obj)
    .forEach((attribute) => this[attribute] = obj[attribute]);
  
  return this;
}

async function create() {
  await createTaskStatus(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchTaskStatus(criteriaObj);
  return rows.map((row) => new TaskStatus(row));
}

async function update() {
  await updateTaskStatus(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseTaskStatus(criteriaObj);
}

Object.assign(
  TaskStatus.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  TaskStatus,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { TaskStatusType };

