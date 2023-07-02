import {
  addUser as addUserIntoOrganization,
  create as createOrganization,
  erase as eraseOrganization,
  eraseUser as eraseUserFromOrganization,
  search as searchOrganization,
  update as updateOrganization,
} from '~/resource/Organizations';
import type { UserType } from './User';

const TABLE_NAME = 'Organizations';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

type OrganizationType = {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  createdAt: string;
  updatedAt: string;
  users: UserType[];
  getAttributeValues: () => [];
  create: () => OrganizationType;
  udpate: () => OrganizationType;
}

type CriteriaObj = {
  createdByUserId?: number;
  id?: number;
  name?: string;
}

function Organization(obj:OrganizationType) {
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

function set(obj: { [keyAttribute: string]: any; }) {
  Object
    .keys(obj)
    .forEach((attribute) => this[attribute] = obj[attribute]);
  
  return this;
}

async function create() {
  try {
    await createOrganization(this);
  } catch (error) {
    console.error('createOrganization error:', error);
  }
  return this;
}

async function search(criteriaObj:CriteriaObj):Promise<OrganizationType[]> {
  try{
    return await searchOrganization(criteriaObj);
  } catch(error) {
    console.error('searchOrganization error:', error);
    return [];
  }
}

async function update() {
  try {
    await updateOrganization(this);
  } catch(error) {
    console.error('updateOrganization error:', error);
  }
  return this;
}

async function erase(criteriaObj:CriteriaObj) {
  try {
    await eraseOrganization(criteriaObj);
  } catch(error) {
    console.error('eraseOrganization error:', error);
  }
}

async function addUser(criteriaObj:{userId:number, organizationId:number}) {
  try {
    await addUserIntoOrganization(criteriaObj);
  } catch(error) {
    console.error('addUserIntoOrganization error:', error);    
  }
  return this;
}

async function eraseUser(criteriaObj:{userId:number, organizationId:number}) {
  try {
    await eraseUserFromOrganization(criteriaObj);
  } catch(error) {
    console.error('eraseUserFromOrganization error:', error);
  }
  return this;
}

Object.assign(
  Organization.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Organization,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
  addUser,
  eraseUser,
};
export type { OrganizationType };

