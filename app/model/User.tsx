import {
  create as createUser, erase as eraseUser,
  search as searchUser, update as updateUser
} from '~/resource/Users';

const TABLE_NAME = 'Users';

const TABLE_ATTRIBUTES = [
  'name',
  'email',
  'hashPassword',
];

interface UserType {
  id: number;
  name: string;
  email: string;
  hashPassword: string;
  getAttributeValues: () => [];
  create: () => UserType;
  udpate: () => UserType;
}

function User(obj:UserType) {
  return this.set(obj);
}

function getAttributeValues() {
  return TABLE_ATTRIBUTES.map((attribute) => this[attribute]);
}

function set(obj) {
  Object
    .keys(obj)
    .forEach((attribute) => this[attribute] = obj[attribute]);
  
  return this;
}

async function create() {
  await createUser(this);
  return this;
}

async function search(criteriaObj) {
  return await searchUser(criteriaObj);
}

async function update() {
  await updateUser(this);
  return this;
}

async function erase(criteriaObj) {
  await eraseUser(criteriaObj);
}

Object.assign(
  User.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
  }
);

export {
  User,
  TABLE_NAME,
  TABLE_ATTRIBUTES,
  search,
  erase,
};
export type { UserType };

