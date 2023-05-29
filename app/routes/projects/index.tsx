import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';
import { Form, useLoaderData } from '@remix-run/react';
import { ActionFunction, json } from '@remix-run/node';
import { OrganizationType } from '~/model/Organization';
import { addUser as addUserIntoProject, eraseUser as eraseUserFromProject, readAll as readAllProjects } from '~/resource/Projects';
import { readAll as readAllUsers } from '~/resource/Users';
import { UserType } from '~/model/User';
import Chip from '~/ui-components/Chip';
import LabelSelect from '~/ui-components/LabelSelect';
import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { getUserSession } from '~/session';
import { sanitizeData } from '~/sanitizerForm';

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
  projects: DataPropType[];
  allUsers: UserType[];
}

export default function AllProjects() {
  const { projects, allUsers } = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Projects</h1>
      <h2>All Projects</h2>
    </hgroup>
    <Rows projects={projects} allUsers={allUsers}/>
    <NavLink role='button' to='./create'>create</NavLink>
  </>);
}

const UserChips = ({users, projectId}:{users:UserType[], projectId:number}) => {
  return (<>
    {
      users.length === 0
        ? 'there is no user in this project'
        : users.map((user) => {
          return ( 
            <Chip
              key={user.id}
              actionName={ACTION_REMOVE_USER}
              data={{userId: user.id, projectId}}
            >
              {user.name}
            </Chip>
          );
        })
    }
  </>);
};

const Rows = ({projects, allUsers}:RowPropType) => {
  return (<>
    {
      projects.map((
        {
          id,
          name,
          description,
          organization,
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
              <NavLink to={`./update/${id}`}>update</NavLink>
              <NavLink to={`./delete/${id}`}>delete</NavLink>
            </summary>
            <ul>
              <li>Description: {description}</li>
              <li>Organization: {organization.name}</li>
              <li>Created by: {createdBy.name} on {createdAt}</li>
              <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
              <li>Users: <UserChips users={users} projectId={id}/></li>
            </ul>
            <UserSelectOptions allUsers={allUsers} projectId={id}/>
          </details>
        );
      })
    }
  </>);
};

const UserSelectOptions = ({projectId, allUsers}:{projectId:number, allUsers:UserType[]}) => {
  return (
    <Form method='post'>
      <input type='hidden' name='projectId' value={projectId} />
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

export const loader:LoaderFunction = async({ params }:LoaderArgs) => {
  const projects = await readAllProjects();
  const allUsers = await readAllUsers();
  return json({
    projects,
    allUsers
  });
}

export const action:ActionFunction = async({request}) => {
  const { user } = await getUserSession(request);
  const {_action, projectId, ...values} = sanitizeData({formData: await request.formData()});
  console.log('projectId', projectId);
  
  switch (_action) {
    case ACTION_ADD_USER:
      await addUserIntoProject({
        createdByUserId: user.id,
        projectId,
        userId: values[ACTION_ADD_USER],
      });
      break;
    case ACTION_REMOVE_USER: 
      await eraseUserFromProject({userId: values.userId, projectId});
      break;
    default:
      break;
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Projects - Team Task Manager',
    description: 'Projects page',
  };
};