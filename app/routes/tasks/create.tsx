import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node';
import {
  useLoaderData, useNavigation
} from '@remix-run/react';
import { Task } from '~/model/Task';
import { search as searchTaskStatus } from '~/model/TaskStatus';
import { search as searchUser } from '~/model/User';
import { readAll as readAllTaskStatus } from '~/resource/TaskStatus';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import TaskForm from '~/ui-components/TaskForm';
import { searchProject as searchUserProject } from '~/model/User';

export default function CreateTask() {
  const {users, taskStatuses} = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Tasks</h1>
      <h2>Create a Task</h2>
    </hgroup>
    <TaskForm
      isSubmitting={isSubmitting}
      users={users}
      taskStatuses={taskStatuses}
    />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const userProject = await searchUserProject({userId: user.id});
  const allUsers = userProject.reduce((accumulator, project) => {
    return [...accumulator, ...project.users];
  }, []);
  const uniqueUsers = Object.values(allUsers.reduce((accumulator, user) => {
    return {
      ...accumulator,
      [user.id]: user,
    };
  }, {}));
  const taskStatuses = await readAllTaskStatus();
  return json({
    users: uniqueUsers,
    taskStatuses,
  });
};

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const {
    name,
    description,
    status,
    importance,
    urgency,
    ...values
  } = sanitizeData({formData: await request.formData()});
  const searchedUsers = await searchUser({id: values['assign-to']});
  const taskStatuses = await searchTaskStatus({id: status});

  const task = new Task({
    name,
    description,
    timeEstimate: values['time-estimate'],
    assignedTo: searchedUsers[0],
    taskStatus: taskStatuses[0],
    isImportant: importance,
    isUrgent: urgency,
    createdBy: user,
    updatedBy: user,
  });
  
  await task.create();
  
  return redirect('/tasks');
}