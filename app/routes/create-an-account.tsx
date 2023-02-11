import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import bcrypt from 'bcryptjs';
import { User } from '~/model/User';
import { sanitizeData } from '~/sanitizerForm';
import UserForm from '~/ui-components/UserForm';


export default function CreateAnAccount() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (<>
    <h2>Create an account</h2>
    <UserForm>
      <button tabIndex={5} disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'continue'}</button>
    </UserForm>
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { name, email, password } = sanitizeData({formData: await request.formData()});
  const hashPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    hashPassword,
  });
  
  await user.create();
  
  return redirect('/sign-in');
};

export const meta:MetaFunction = () => {
  return {
    title: 'Create an account - TaskingThis',
    description: 'Create an account page',
  };
};