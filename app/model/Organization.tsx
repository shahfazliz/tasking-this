import {
  create as createOrganization, erase as eraseOrganization,
  search as searchOrganization, update as updateOrganization
} from '~/resource/Organizations';
import type { UserType } from './User';

const TABLE_NAME = 'Organizations';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

interface OrganizationType {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
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
  await createOrganization(this);
  return this;
}

async function search(criteriaObj:CriteriaObj) {
  return await searchOrganization(criteriaObj);
}

async function update() {
  await updateOrganization(this);
  return this;
}

async function erase(criteriaObj:CriteriaObj) {
  await eraseOrganization(criteriaObj);
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
};
export type { OrganizationType };

