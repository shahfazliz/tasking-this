import {
  create as createReport, erase as eraseReport,
  search as searchReport, update as updateReport
} from '~/resource/Reports';
import type { UserType } from './User';

const TABLE_NAME = 'Reports';

const TABLE_ATTRIBUTES = [
  'name',
  'description',
  'createdByUserId',
  'updatedByUserId',
];

interface ReportType {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  getAttributeValues: () => [];
  create: () => ReportType;
  udpate: () => ReportType;
}

function Report(obj:ReportType) {
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
  await createReport(this);
  return this;
}

async function search(criteriaObj) {
  const rows = await searchReport(criteriaObj);
  return rows.map((row) => new Report(row));
}

async function update() {
  await updateReport(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseReport(criteriaObj);
}

Object.assign(
  Report.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  Report,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { ReportType };

