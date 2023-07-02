import {
  create as createUser, erase as eraseUser,
  search as searchUser, update as updateUser,
  searchRoles as searchUserRoles,
} from '~/resource/Users';
import { RoleType } from './Role';

const TABLE_NAME = 'Users';

const TABLE_ATTRIBUTES = [
  'name',
  'email',
  'hashPassword',
];

type UserType = {
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
  try {
    await createUser(this);
  } catch(error) {
    console.error('createUser error:', error);    
  }
  return this;
}

async function search(criteriaObj:UserType) {
  try {
    return await searchUser(criteriaObj);
  } catch(error) {
    console.error('searchUser error:', error);
    return [];
  }
}

async function update() {
  try {
    await updateUser(this);
  } catch(error) {
    console.error('updateUser error:', error);
  }
  return this;
}

function roles():Promise<RoleType[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const roles = await searchUserRoles({userId: this.id});
      resolve(roles);
    } catch(error) {
      reject(error);
    }
  });
}

async function erase(criteriaObj) {
  try {
    await eraseUser(criteriaObj);
  } catch(error) {
    console.error('eraseUser error:', error);
  }
}

Object.assign(
  User.prototype,
  {
    getAttributeValues,
    set,
    create,
    update,
    roles,
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

