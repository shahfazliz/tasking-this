import { CreateNavLink, DeleteNavLink, UpdateNavLink } from '~/ui-components/BasicNavLink';
import { Form, useLoaderData } from '@remix-run/react';
import { getUserSession } from '~/session';
import { json } from '@remix-run/node';
import { OrganizationType } from '~/model/Organization';
import { readAll as readAllRoles } from '~/resource/Roles';
import { readAll as readAllUsers } from '~/resource/Users';
import { UserType } from '~/model/User';
import Chip from '~/ui-components/Chip';
import LabelSelect from '~/ui-components/LabelSelect';
import type { ActionFunction, LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { sanitizeData } from '~/sanitizerForm';
import {
  addUser as addUserIntoRole,
  eraseUser as eraseUserFromRole,
} from '~/model/Role';

const ACTION_ADD_USER = 'add-user';
const ACTION_REMOVE_USER = 'remove-user';

type DataPropType = {
  id: number;
  name: string;
  description: string;
  organization: OrganizationType;
  createdBy: UserType;
  updatedBy: UserType;
  createdAt: string;
  updatedAt: string;
  users: UserType[];
}

type RowPropType = {
  roles: DataPropType[];
  allUsers: UserType[];
  isAdmin: boolean;
}

export default function AllRoles() {
  const {roles, allUsers, isAdmin} = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Roles</h1>
      <h2>All Roles</h2>
    </hgroup>
    <Rows roles={roles} allUsers={allUsers} isAdmin={isAdmin}/>
    <CreateNavLink role='button' to='./create' text='Create Role'/>
  </>);
}

const UserChips = ({users, roleId, isAdmin}:{users:UserType[], roleId:number, isAdmin: boolean}) => {
  return (<>
    {
      users.length === 0
        ? 'there is no user in this role'
        : users.map((user) => {
          return ( 
            <Chip
              key={user.id}
              actionName={ACTION_REMOVE_USER}
              data={{userId: user.id, roleId}}
              editable={isAdmin}
            >
              {user.name}
            </Chip>
          );
        })
    }
  </>);
};

const UserSelectOptions = ({roleId, allUsers}:{roleId:number, allUsers:UserType[]}) => {
  return (
    <Form method='post'>
      <input type='hidden' name='roleId' value={roleId} />
      <LabelSelect name={ACTION_ADD_USER} options={allUsers} />
      <button
        type='submit'
        name='_action'
        value={ACTION_ADD_USER}
        aria-label={ACTION_ADD_USER}
      >
        add
      </button>
    </Form>
  );
}

const Rows = ({roles, allUsers, isAdmin}:RowPropType) => {
  return (<>
    {
      roles.map((
        {
          id,
          name,
          description,
          // organization,
          createdBy,
          updatedBy,
          createdAt,
          updatedAt,
          users,
        }:DataPropType,
        index:number
      ) => {
        return (
          <details key={id}>
            <summary className='with-control-button'>
              <span>{ index + 1 }. {name}</span>
              {isAdmin && <UpdateNavLink to={`./update/${id}`} />}
              {isAdmin && <DeleteNavLink to={`./delete/${id}`} />}
            </summary>
            <ul>
              <li>Description: {description}</li>
              <li>Created by: {createdBy.name} on {createdAt}</li>
              <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
              <li>Users: <UserChips users={users} roleId={id} isAdmin={isAdmin}/></li>
            </ul>
            {isAdmin && <UserSelectOptions allUsers={allUsers} roleId={id}/>}
          </details>
        );
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ request }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const userRoles = await user?.roles() ?? [];
  const isAdmin = userRoles.some(({name}:{name: String}) => name === 'Admin');
  const allRoles = await readAllRoles();
  const allUsers = await readAllUsers();

  return json({
    roles: allRoles,
    allUsers,
    isAdmin,
  });
}

export const action:ActionFunction = async({request}) => {
  const { user } = await getUserSession(request);
  const {_action, roleId, ...values} = sanitizeData({formData: await request.formData()});
  
  switch (_action) {
    case ACTION_ADD_USER:
      await addUserIntoRole({
        createdByUserId: user.id,
        roleId,
        userId: values[ACTION_ADD_USER],
      });
      break;
    case ACTION_REMOVE_USER: 
      await eraseUserFromRole({userId: values.userId, roleId});
      break;
    default:
      break;
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Roles - Team Task Manager',
    description: 'Roles page',
  };
};