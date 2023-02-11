import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { readAll as readAllUser } from '~/resource/Users';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';

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
    <NavLink role='button' to='./create'>create</NavLink>
  </>);
}

export const loader:LoaderFunction = async({ params }: LoaderArgs) => {
  const rows = await readAllUser();
  return json(rows);
}

interface UserInput {
  id: number;
  name: string;
  email: string;
  hashPassword: string;
}

interface Props {
  data: UserInput[];
}

const Rows:React.FC<Props> = ({data}) => {
  return (<tbody>
    {
      data.map(({id, name, email, hashPassword}, index) => {
        return (<tr key={id}>
          <th scope='row'>{index + 1}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td><NavLink to={`./update/${id}`}>update</NavLink></td>
          <td><NavLink to={`./delete/${id}`}>delete</NavLink></td>
        </tr>);
      })
    }
  </tbody>);
};

export const meta:MetaFunction = () => {
  return {
    title: 'Users - TaskingThis',
    description: 'Users page',
  };
};