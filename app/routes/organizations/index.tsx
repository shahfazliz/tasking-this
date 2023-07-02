import type { ActionFunction, LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import {
  addUser as addUserIntoOrganization,
  eraseUser as eraseUserFromOrganization,
  OrganizationType,
} from '~/model/Organization';
import { UserType, searchOrganization as searchUserOrganization } from '~/model/User';
import { readAll as readAllUsers } from '~/resource/Users';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import { CreateNavLink, DeleteNavLink, UpdateNavLink } from '~/ui-components/BasicNavLink';
import Chip from '~/ui-components/Chip';
import LabelSelect from '~/ui-components/LabelSelect';

const ACTION_ADD_USER = 'add-user';
const ACTION_REMOVE_USER = 'remove-user';

type RowPropType = {
  organizations: OrganizationType[];
  allUsers: UserType[];
  isManager: boolean;
}

export default function AllOrganizations() {
  const {organizations, allUsers, isManager} = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Organizations</h1>
      <h2>All Organizations</h2>
    </hgroup>
    <Rows organizations={organizations} allUsers={allUsers} isManager={isManager}/>
    {isManager && <CreateNavLink role='button' to='./create' text='Create Organization'/>}
  </>);
}

const UserChips = ({users, organizationId, isManager}:{users:UserType[], organizationId:number, isManager: boolean}) => {
  return (<>
    {
      users.length === 0
        ? 'there is no user in this organization'
        : users.map((user) => {
          return ( 
            <Chip
              key={user.id}
              actionName={ACTION_REMOVE_USER}
              data={{userId: user.id, organizationId}}
              editable={isManager}
            >
              {user.name}
            </Chip>
          );
        })
    }
  </>);
};

const UserSelectOptions = ({organizationId, allUsers}:{organizationId:number, allUsers:UserType[]}) => {
  return (
    <Form method='post'>
      <input type='hidden' name='organizationId' value={organizationId} />
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

const Rows = ({organizations, allUsers, isManager}:RowPropType) => {
  return (<>
    {
      organizations.map((
        {
          id,
          name,
          description,
          createdBy,
          updatedBy,
          createdAt,
          updatedAt,
          users,
        }:OrganizationType,
        index:number
      ) => {
        return (
          <details key={id}>
            <summary className='with-control-button'>
              <span>{ index + 1 }. {name}</span>
              {isManager && <UpdateNavLink to={`./update/${id}`} />}
              {isManager && <DeleteNavLink to={`./delete/${id}`} />}
            </summary>
            <ul>
              <li>Description: {description}</li>
              <li>Created by: {createdBy.name} on {createdAt}</li>
              <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
              <li>Users: <UserChips users={users} organizationId={id} isManager={isManager}/></li>
            </ul>
            {isManager && <UserSelectOptions allUsers={allUsers} organizationId={id}/>}
          </details>
        );
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ request, params }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const roles = await user?.roles() ?? [];
  const isManager = roles.some(({name}:{name: String}) => name === 'Manager');

  const userOrganizations = await searchUserOrganization({userId: user.id});
  const allUsers = await readAllUsers();

  return json({
    organizations: userOrganizations,
    allUsers,
    isManager,
  });
};

export const action:ActionFunction = async({request}) => {
  const { user } = await getUserSession(request);
  const {_action, organizationId, ...values} = sanitizeData({formData: await request.formData()});
  
  switch (_action) {
    case ACTION_ADD_USER:
      await addUserIntoOrganization({
        createdByUserId: user.id,
        organizationId,
        userId: values[ACTION_ADD_USER],
      });
      break;
    case ACTION_REMOVE_USER: 
      await eraseUserFromOrganization({userId: values.userId, organizationId});
      break;
    default:
      break;
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Organizations - Team Task Manager',
    description: 'Organizations page',
  };
};