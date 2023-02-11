import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { UserType } from '~/model/User';
import { readAll as readAllTaskStatus } from '~/resource/TaskStatus';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

type DataPropType = {
  id: number,
  name: string,
  description: string,
  createdBy: UserType,
  updatedBy: UserType,
}

type RowPropType = {
  data: DataPropType[];
}

export default function AllTaskStatus() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Task Status</h1>
      <h2>All Task Status</h2>
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

const Rows = ({data}:RowPropType) => {
  return (<tbody>
    {
      data.map((
        {
          id,
          name,
          description,
          createdBy,
          updatedBy,
        }:DataPropType,
        index:number
      ) => {
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
  const rows = await readAllTaskStatus();
  return json(rows);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Task Status - TaskingThis',
    description: 'Task Status page',
  };
};