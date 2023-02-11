import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import { create as createTask } from '~/resource/Tasks';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import TaskForm from '~/ui-components/TaskForm';

export default function CreateTask() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Tasks</h1>
      <h2>Create a Task</h2>
    </hgroup>
    <TaskForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});
  
  await createTask({
    name,
    description,
    createdBy: user,
    updatedBy: user,
  });
  
  return redirect('/tasks');
}