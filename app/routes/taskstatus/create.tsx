import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import { TaskStatus } from '~/model/TaskStatus';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import TaskStatusForm from '~/ui-components/TaskStatusForm';

export default function CreateTopic() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Task Status</h1>
      <h2>Create Task Status</h2>
    </hgroup>
    <TaskStatusForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, color, description } = sanitizeData({formData: await request.formData()});
  
  const taskStatus = new TaskStatus({
    name,
    color,
    description,
    createdBy: user,
    updatedBy: user,
  });

  await taskStatus.create();
  
  return redirect('/taskstatus');
}