import type { ActionFunction, LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useRef } from 'react';
import { eraseUser as eraseUserFromOrganization, OrganizationType, search as searchOrganization } from '~/model/Organization';
import { UserType } from '~/model/User';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';
import Chip from '~/ui-components/Chip';

const ACTION_REMOVE_USER = 'remove_user';

type RowPropType = {
  data: OrganizationType[];
}

export default function AllOrganizations() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Organizations</h1>
      <h2>All Organizations</h2>
    </hgroup>
    <Rows data={rows}/>
    <NavLink role='button' to='./create'>create</NavLink>
  </>);
}

const UserChips = ({users, organizationId}:{users:UserType[], organizationId:number}) => {
  return (<>
    {
      users.length === 0
        ? 'there is no user in this organization'
        : users.map((user) => {
          const chipRef = useRef();
          return ( 
            <Chip
              chipRef={chipRef}
              key={user.id}
              actionName={ACTION_REMOVE_USER}
              data={{userId: user.id, organizationId}}
            >
              {user.name}
            </Chip>
          );
        })
    }
  </>);
};

const Rows = ({data}:RowPropType) => {
  return (<>
    {
      data.map((
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
              <NavLink to={`./update/${id}`}>update</NavLink>
              <NavLink to={`./delete/${id}`}>delete</NavLink>
            </summary>
            <ul>
              <li>Description: {description}</li>
              <li>Created by: {createdBy.name} on {createdAt}</li>
              <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
              <li>Users: <UserChips users={users} organizationId={id}/></li>
            </ul>
          </details>
        );
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ request, params }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const organization = await searchOrganization({createdByUserId: user.id});
  return json(organization);
};

export const action:ActionFunction = async({request}) => {
  const {_action, userId, organizationId} = sanitizeData({formData: await request.formData()});
  
  switch (_action) {
    case ACTION_REMOVE_USER: 
      await eraseUserFromOrganization({userId, organizationId});
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Organizations - TaskingThis',
    description: 'Organizations page',
  };
};