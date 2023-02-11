import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { erase as eraseUser, search as searchUser } from '~/model/User';

export default function DeleteUser() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();
  return (<>
    <hgroup>
      <h1>Users</h1>
      <h2>Delete user</h2>
    </hgroup>
    <table role='grid'>
      <tbody>
        <tr>
          <th scope='row'>name:</th>
          <td>{data.name}</td>
        </tr>
        <tr>
          <th scope="row"><b>email:</b></th>
          <td>{data.email}</td>
        </tr>
      </tbody>
    </table>
    <Form method='post'>
      <button
        tabIndex={1}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'submitting...' : 'delete'}
      </button>
    </Form>
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchUser({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  await eraseUser({id: params.id});
  return redirect('/users')
}