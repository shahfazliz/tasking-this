import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { erase as eraseTask, search as searchTask } from '~/model/Task';

export default function DeleteTask() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();
  return (<>
    <hgroup>
      <h1>Tasks</h1>
      <h2>Delete Task</h2>
    </hgroup>
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
  const objs = await searchTask({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  await eraseTask({id: params.id});
  return redirect('/tasks')
}