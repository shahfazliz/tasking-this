import {
  create as createPermission, erase as erasePermission,
  search as searchPermission, update as updatePermission
} from '~/resource/Permissions';
import type { UserType } from './User';

const TABLE_NAME = 'Permissions';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

interface PermissionType {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => PermissionType;
  udpate: () => PermissionType;
}

function Permission(obj:PermissionType) {
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
  await createPermission(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchPermission(criteriaObj);
  return rows.map((row) => new Permission(row));
}

async function update() {
  await updatePermission(this);
  return this;
}

async function erase(criteriaObj) {
  await erasePermission(criteriaObj);
}

Object.assign(
  Permission.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Permission,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { PermissionType };

