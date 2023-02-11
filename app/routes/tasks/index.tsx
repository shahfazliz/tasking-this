import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TaskStatusType } from '~/model/TaskStatus';
import { UserType } from '~/model/User';
import { readAll as readAllTasks } from '~/resource/Tasks';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

type DataPropType = {
  id: number,
  name: string,
  description: string,
  assignedTo: UserType,
  taskStatus: TaskStatusType,
  isImportant: boolean,
  isUrgent: boolean,
  timeEstimate: number,
  createdBy: UserType,
  updatedBy: UserType,
}

type RowPropType = {
  data: DataPropType[];
}

export default function AllTasks() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Tasks</h1>
      <h2>All Tasks</h2>
    </hgroup>
    <table role='grid'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>name</th>
          <th scope='col'>description</th>
          <th scope='col'>assigned to</th>
          <th scope='col'>status</th>
          <th scope='col'>important</th>
          <th scope='col'>urgent</th>
          <th scope='col'>time estimate</th>
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
          assignedTo,
          taskStatus,
          isImportant,
          isUrgent,
          timeEstimate,
          createdBy,
          updatedBy,
        }:DataPropType,
        index:number
      ) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{name}</td>
          <td>{description}</td>
          <td>{assignedTo.name}</td>
          <td>{taskStatus.name}</td>
          <td>{isImportant}</td>
          <td>{isUrgent}</td>
          <td>{timeEstimate}</td>
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
  const rows = await readAllTasks();
  return json(rows);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Tasks - TaskingThis',
    description: 'Tasks page',
  };
};
