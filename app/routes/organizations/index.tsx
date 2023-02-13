import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { OrganizationType, search as searchOrganization } from '~/model/Organization';
import { UserType } from '~/model/User';
import { getUserSession } from '~/session';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

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

const Users = ({data}:{data:UserType[]}) => {
  return (<>
    {
      data.length === 0
        ? 'no user in this organization'
        : data.map((user) => user.name).join(', ')
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
        return (<details key={id}>
          <summary className='with-control-button'>
            <span>{ index + 1 }. {name}</span>
            <NavLink to={`./update/${id}`}>update</NavLink>
            <NavLink to={`./delete/${id}`}>delete</NavLink>
          </summary>
          <ul>
            <li>Description: {description}</li>
            <li>Created by: {createdBy.name} on {createdAt}</li>
            <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
            <li>Users: <Users data={users}/></li>
          </ul>
        </details>);
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ request, params }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const organization = await searchOrganization({createdByUserId: user.id});
  return json(organization);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Organizations - TaskingThis',
    description: 'Organizations page',
  };
};