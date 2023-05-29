import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { destroyCookieHeader, getUserSession } from "~/session";

export default function SignOut() {
  return (<>
    <h2>Sign Out</h2>
    <Form method='post'>
      <button>sign out</button>
    </Form>
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { session } = await getUserSession(request);
  return redirect('/', {
    headers: await destroyCookieHeader(session)
  });
};

export const meta:MetaFunction = () => {
  return {
    title: 'Sign out - Team Task Manager',
    description: 'Sign out page',
  };
};