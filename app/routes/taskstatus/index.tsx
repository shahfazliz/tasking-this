import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { UserType } from '~/model/User';
import { readAll as readAllTaskStatus } from '~/resource/TaskStatus';
import { CreateNavLink, DeleteNavLink, UpdateNavLink } from '~/ui-components/BasicNavLink';

type DataPropType = {
  id: number,
  name: string,
  color: string,
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
    <CreateNavLink role='button' to='./create' text='Create Task Status'/>
  </>);
}

const Rows = ({data}:RowPropType) => {
  return (<tbody>
    {
      data.map((
        {
          id,
          name,
          color,
          description,
          createdBy,
          updatedBy,
        }:DataPropType,
        index:number
      ) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td><mark style={{ backgroundColor: color }}>{name}</mark></td>
          <td>{description}</td>
          <td>{createdBy.name}</td>
          <td>{updatedBy.name}</td>
          <td><UpdateNavLink to={`./update/${id}`}/></td>
          <td><DeleteNavLink to={`./delete/${id}`}/></td>
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
    title: 'Task Status - Team Task Manager',
    description: 'Task Status page',
  };
};