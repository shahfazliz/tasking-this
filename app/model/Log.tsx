import {
  create as createLog, erase as eraseLog,
  search as searchLog, update as updateLog
} from '~/resource/Logs';
import type { OrganizationType } from './Organization';
import type { ProjectType } from './Project';
import type { ResourceType } from './Resource';
import type { TaskType } from './Task';
import type { TopicType } from './Topic';
import type { UserType } from './User';

const TABLE_NAME = 'Logs';

const TABLE_ATTRIBUTES = [
  'message',
  'userId',
  'organizationId',
  'projectId',
  'topicId',
  'resourceId',
  'taskId',
];

interface LogType {
  id: number;
  message: string;
  user: UserType;
  organization: OrganizationType;
  project: ProjectType;
  topic: TopicType;
  resource: ResourceType;
  task: TaskType;
  getAttributeValues: () => [];
  create: () => LogType;
  udpate: () => LogType;
}

function Log(obj:LogType) {
  return this.set(obj);
}

function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => {
    switch (attribute) {
      case 'userId': return this.user.id;
      case 'organizationId': return this.organization.id;
      case 'projectId': return this.project.id;
      case 'topicId' : return this.topic.id;
      case 'resourceId' : return this.resource.id;
      case 'taskId' : return this.task.id;
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
  await createLog(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchLog(criteriaObj);
  return rows.map((row) => new Log(row));
}

async function update() {
  await updateLog(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseLog(criteriaObj);
}

Object.assign(
  Log.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Log,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { LogType };

