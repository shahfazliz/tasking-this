import {
  create as createTopic, erase as eraseTopic,
  search as searchTopic, update as updateTopic
} from '~/resource/Topics';
import type { UserType } from './User';

const TABLE_NAME = 'Topics';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

interface TopicType {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => TopicType;
  udpate: () => TopicType;
}

function Topic(obj:TopicType) {
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
  await createTopic(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchTopic(criteriaObj);
  return rows.map((row) => new Topic(row));
}

async function update() {
  await updateTopic(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseTopic(criteriaObj);
}

Object.assign(
  Topic.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Topic,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { TopicType };

