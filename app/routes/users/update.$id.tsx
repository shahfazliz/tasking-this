import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchUser } from '~/model/User';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import UserForm from '~/ui-components/UserForm';

export default function DeleteUser() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();

  return (<>
    <hgroup>
      <h1>Users</h1>
      <h2>Update User</h2>
    </hgroup>
    <UserForm {...data} isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchUser({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});

  const objs = await searchUser({id: params.id});
  objs[0]
    .set({
      name,
      description,
      updatedBy: user,
    })
    .update();

  return redirect('/users')
}