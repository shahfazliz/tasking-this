import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { readAll as readAllLogs } from '~/resource/Logs';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

type DataPropType = {
  id: number;
  name: string;
  description: string;
  createdByUserId: number;
  updatedByUserId: number;
}

type RowPropType = {
  data: DataPropType[];
}

export default function AllLogs() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Logs</h1>
      <h2>All Logs</h2>
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
          createdByUserId,
          updatedByUserId,
        }:DataPropType,
        index:number
      ) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{name}</td>
          <td>{description}</td>
          <td>{createdByUserId}</td>
          <td>{updatedByUserId}</td>
          <td><NavLink to={`./update/${id}`}>update</NavLink></td>
          <td><NavLink to={`./delete/${id}`}>delete</NavLink></td>
        </tr>);
      })
    }
  </tbody>);
};

export const loader:LoaderFunction = async({ params }:LoaderArgs) => {
  const rows = await readAllLogs();
  return json(rows);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Logs - Team Task Manager',
    description: 'Logs page',
  };
};