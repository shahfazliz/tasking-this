import { getUserSession } from '~/session';
import { json } from '@remix-run/node';
import { searchTasks } from '~/resource/Reports';
import { useLoaderData } from '@remix-run/react';
import { UserType } from '~/model/User';
import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';

type DataPropType = {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
}

type RowPropType = {
  data: DataPropType[];
}

export default function AllReports() {
  const { tasks } = useLoaderData<typeof loader>();

  // All tasks
  // Group tasks by status

  // Filter tasks by urgent && important
  // Group tasks by status

  // Filter tasks by urgent && not important
  // Group tasks by status

  // Filter tasks by not urgent && important
  // Group tasks by status

  // Filter tasks by not urgent && not important
  // Group tasks by status

  // List in a table
  // Filter tasks by organization
  // Filter tasks by project
  // Filter tasks by topic

  return (<>
    <hgroup>
      <h1>Report</h1>
      <h2>Current status and progress report</h2>
    </hgroup>
    {JSON.stringify(tasks)}
  </>);
}

export const loader:LoaderFunction = async({ request }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const tasks = await searchTasks({userId: user.id});
  return json({tasks});
}

export const meta:MetaFunction = () => {
  return {
    title: 'Reports - Team Task Manager',
    description: 'Reports page',
  };
};