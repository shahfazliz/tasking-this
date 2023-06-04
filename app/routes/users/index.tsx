import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { readAll as readAllUser } from '~/resource/Users';
import { CreateNavLink, DeleteNavLink, UpdateNavLink } from '~/ui-components/BasicNavLink';

export default function AllUsers() {
  const rows = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Users</h1>
      <h2>All Users</h2>
    </hgroup>
    <table role='grid'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>name</th>
          <th scope='col'>email</th>
          <th scope='col'>&nbsp;</th>
          <th scope='col'>&nbsp;</th>
        </tr>
      </thead>
      <Rows data={rows}/>
    </table>
    <CreateNavLink role='button' to='./create' text='Create User'/>
  </>);
}

export const loader:LoaderFunction = async({ params }: LoaderArgs) => {
  const rows = await readAllUser();
  return json(rows);
}

type UserInputType = {
  id: number;
  name: string;
  email: string;
  hashPassword: string;
}

type DataPropType = {
  data: UserInputType[];
}

const Rows:React.FC<DataPropType> = ({data}:DataPropType) => {
  return (<tbody>
    {
      data.map((
        {
          id,
          name,
          email,
        }:UserInputType,
        index:number
      ) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td><UpdateNavLink to={`./update/${id}`}/></td>
          <td><DeleteNavLink to={`./delete/${id}`}/></td>
        </tr>);
      })
    }
  </tbody>);
};

export const meta:MetaFunction = () => {
  return {
    title: 'Users - Team Task Manager',
    description: 'Users page',
  };
};