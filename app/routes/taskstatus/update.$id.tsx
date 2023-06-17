import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchTaskStatus } from '~/model/TaskStatus';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import TaskStatusForm from '~/ui-components/TaskStatusForm';

export default function UpdateTaskStatus() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();

  return (<>
    <hgroup>
      <h1>Task Status</h1>
      <h2>Update Task Status</h2>
    </hgroup>
    <TaskStatusForm {...data} isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchTaskStatus({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, color, description } = sanitizeData({formData: await request.formData()});
  console.log(color);

  const objs = await searchTaskStatus({id: params.id});
  objs[0]
    .set({
      name,
      color,
      description,
      updatedBy: user,
    })
    .update();

  return redirect('/taskstatus')
}