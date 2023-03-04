import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, useTransition as useNavigation } from '@remix-run/react';
import bcrypt from 'bcryptjs';
import { search as searchUser } from '~/model/User';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession, setCookieHeader } from '~/session';

export default function SignIn() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <h2>Sign in</h2>
    <Form method='post'>
      <fieldset>
        <legend>User details</legend>
        <label htmlFor='input-email'>email</label>
        <input type='email' name='email' id='input-email' tabIndex={1} placeholder='email' required />
        <label htmlFor='input-password'>password</label>
        <input type='password' name='password' id='input-password' tabIndex={2} placeholder='password' required />
      </fieldset>
      <button tabIndex={3} disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'continue'}</button>
    </Form>
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { session } = await getUserSession(request);
  const { email, password } = sanitizeData({formData: await request.formData()});

  const users = await searchUser({ email });
  const user = users[0];

  const isCorrectPassword = await bcrypt.compare(password, user.hashPassword);

  if (!isCorrectPassword) {
    session.flash('error', 'Invalid username/password');
    return redirect('/sign-in', {
      headers: await setCookieHeader(session),
    });
  }

  session.set('id', user.id);
  session.set('name', user.name);
  session.set('email', user.email);
  
  return redirect('/account', {
    headers: await setCookieHeader(session),
  });
};

export const meta:MetaFunction = () => {
  return {
    title: 'Sign in - TaskingThis',
    description: 'Sign in page',
  };
};