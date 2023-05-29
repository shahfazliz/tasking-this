// user profile
// display all details about current user
// update and delete option

import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getUserSession } from '~/session';

export default function UserProfile() {
  const data = useLoaderData();

  return (<>
    <hgroup>
      <h1>User Account</h1>
      <h2>Profile</h2>
    </hgroup>
    <p>name: {data.name}</p>
    <p>email: {data.email}</p>
  </>);
}

export const loader:LoaderFunction = async({ request, params }:LoaderArgs) => {
  const { session } = await getUserSession(request);
  return json(session.data);
}

export const meta:MetaFunction = () => {
  return {
    title: 'Profile - Team Task Manager',
    description: 'Sign in page',
  };
};