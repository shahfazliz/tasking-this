import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { readAll as readAllPermissions } from '~/resource/Permissions';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

export default function AllPermissions() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Permissions</h1>
      <h2>All Permissions</h2>
    </hgroup>
    <table role='grid'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>name</th>
          <th scope='col'>description</th>
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
      data.map(({id, name, description, createdBy, updatedBy}, index) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{name}</td>
          <td>{description}</td>
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
  const rows = await readAllPermissions();
  return json(rows);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Permissions - TaskingThis',
    description: 'Permissions page',
  };
};