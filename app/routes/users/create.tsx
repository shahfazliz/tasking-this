import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import bcrypt from 'bcryptjs';
import { create as createUser } from '~/resource/Users';
import { sanitizeData } from '~/sanitizerForm';
import UserForm from '~/ui-components/UserForm';

export default function CreateUser() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (<>
    <hgroup>
      <h1>Users</h1>
      <h2>Create a User</h2>
    </hgroup>
    <UserForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { name, email, password } = sanitizeData({formData: await request.formData()});
  const hashPassword = await bcrypt.hash(password, 10);

  await createUser({
    name,
    email,
    hashPassword,
  });
  
  return redirect('/users');
};

export const meta:MetaFunction = () => {
  return {
    title: 'Create User - TaskingThis',
    description: 'Create user page',
  };
};
