import {
  create as createProject, erase as eraseProject,
  search as searchProject, update as updateProject
} from '~/resource/Projects';
import type { OrganizationType } from './Organization';
import type { UserType } from './User';

const TABLE_NAME = 'Projects';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'organizationId',
  'createdByUserId',
  'updatedByUserId',
];

interface ProjectType {
  id: number;
  name: string;
  description: string;
  organization: OrganizationType;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => ProjectType;
  udpate: () => ProjectType;
}

function Project(obj:ProjectType) {
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
  await createProject(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchProject(criteriaObj);
  return rows.map((row) => new Project(row));
}

async function update() {
  await updateProject(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseProject(criteriaObj);
}

Object.assign(
  Project.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Project,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { ProjectType };

