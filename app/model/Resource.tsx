import {
  create as createResource, erase as eraseResource,
  search as searchResource, update as updateResource
} from '~/resource/Resources';
import type { UserType } from './User';

const TABLE_NAME = 'Resources';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

interface ResourceType {
  id: number;
  title: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => ResourceType;
  udpate: () => ResourceType;
}

function Resource(obj:ResourceType) {
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
  await createResource(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchResource(criteriaObj);
  return rows.map((row) => new Resource(row));
}

async function update() {
  await updateResource(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseResource(criteriaObj);
}

Object.assign(
  Resource.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Resource,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { ResourceType };

