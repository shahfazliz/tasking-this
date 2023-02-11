import {
  create as createTask, erase as eraseTask,
  search as searchTask, update as updateTask
} from '~/resource/Tasks';
import type { UserType } from './User';

const TABLE_NAME = 'Tasks';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
  'assignedToUserId',
  'taskStatusId',
  'isImportant',
  'isUrgent',
  'timeEstimate',
];

interface TaskType {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  assignedTo: UserType;
  taskStatusId: number;
  isImportant: number;
  isUrgent: number;
  timeEstimate: number;
  getAttributeValues: () => [];
  create: () => TaskType;
  udpate: () => TaskType;
}

function Task(obj:TaskType) {
  return this.set(obj);
}

function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => {
    switch (attribute) {
      case 'createdByUserId': return this.createdBy.id;
      case 'updatedByUserId': return this.updatedBy.id;
      case 'assignedToUserId': return this.assignedTo.id;
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
  await createTask(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchTask(criteriaObj);
  return rows.map((row) => new Task(row));
}

async function update() {
  await updateTask(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseTask(criteriaObj);
}

Object.assign(
  Task.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Task,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { TaskType };

