import {
  create as createRole, erase as eraseRole,
  search as searchRole, update as updateRole,
  addUser as addUserIntoRole,
  eraseUser as eraseUserFromRole,
} from '~/resource/Roles';
import type { OrganizationType } from '~/model/Organization';
import type { UserType } from './User';

const TABLE_NAME = 'Roles';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'organizationId',
  'createdByUserId',
  'updatedByUserId',
];

interface RoleType {
  id: number;
  name: string;
  description: string;
  organization: OrganizationType;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => RoleType;
  udpate: () => RoleType;
}

function Role(obj:RoleType) {
  return this.set(obj);
}

function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => {
    switch (attribute) {
      case 'organizationId': return this.organization.id;
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
  await createRole(this);
  return this;
}

async function search(criteriaObj) {
  return await searchRole(criteriaObj);
}

async function update() {
  await updateRole(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseRole(criteriaObj);
}

async function addUser(criteriaObj:{userId:number, roleId:number}) {
  try {
    await addUserIntoRole(criteriaObj);
  } catch(error) {
    console.error('addUserIntoRole error:', error);    
  }
  return this;
}

async function eraseUser(criteriaObj:{userId:number, roleId:number}) {
  try {
    await eraseUserFromRole(criteriaObj);
  } catch(error) {
    console.error('eraseUserFromRole error:', error);
  }
  return this;
}

Object.assign(
  Role.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Role,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
  addUser,
  eraseUser,
};
export type { RoleType };

