import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { readAll as readAllRoles } from '~/resource/Roles';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

export default function AllRoles() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Roles</h1>
      <h2>All Roles</h2>
    </hgroup>
    <table role='grid'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>name</th>
          <th scope='col'>description</th>
          <th scope='col'>organization</th>
          <th scope='col'>created by</th>
          <th scope='col'>last updated by</th>
          <th scope='col'>&nbsp;</th>
          <th scope='col'>&nbsp;</th>
        </tr>
      </thead>
      <Rows data={rows}/>
    </table>
    <NavLink role='button' to='./create'>create</NavLink>
  </>);
}

const Rows:React.FC = ({data}) => {
  return (<tbody>
    {
      data.map(({id, name, description, organization, createdBy, updatedBy}, index) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{name}</td>
          <td>{description}</td>
          <td>{organization.name}</td>
          <td>{createdBy.name}</td>
          <td>{updatedBy.name}</td>
          <td><NavLink to={`./update/${id}`}>update</NavLink></td>
          <td><NavLink to={`./delete/${id}`}>delete</NavLink></td>
        </tr>);
      })
    }
  </tbody>);
};

export const loader:LoaderFunction = async({ params }:LoaderArgs) => {
  const rows = await readAllRoles();
  return json(rows);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Roles - TaskingThis',
    description: 'Roles page',
  };
};