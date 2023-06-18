import { Chart } from 'react-google-charts';
import { getUserSession } from '~/session';
import { json } from '@remix-run/node';
import { readAll as readAllTaskStatus } from '~/resource/TaskStatus';
import { searchTasks } from '~/resource/Reports';
import { useLoaderData } from '@remix-run/react';
import { UserType } from '~/model/User';
import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { TaskStatusType } from '~/model/TaskStatus';
import { TaskType } from '~/model/Task';

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
  const { tasks, taskStatuses } = useLoaderData<typeof loader>();

  // All tasks
  // Group tasks by status
  const allTasksData = [['Status', 'Count']];
  taskStatuses.reduce((accumulator: Array<Array<string | number>>, taskStatus: TaskStatusType) => {
    accumulator.push([
      taskStatus.name,
      tasks.filter((task: TaskType) => task.status === taskStatus.name).length,
    ]);
    return accumulator;
  }, allTasksData);

  // Filter tasks by important && urge t
  const importantUrgentTasks = tasks.filter((task: TaskType) => task.isUrgent && task.isImportant);
  // // Group tasks by status
  const importantUrgentData = [['Status', 'Count']];
  taskStatuses.reduce((accumulator: Array<Array<string | number>>, taskStatus: TaskStatusType) => {
    accumulator.push([
      taskStatus.name,
      importantUrgentTasks.filter((task: TaskType) => task.status === taskStatus.name).length,
    ]);
    return accumulator;
  }, importantUrgentData);

  // Filter tasks by important && not urgent
  const importantNotUrgentTasks = tasks.filter((task: TaskType) => !task.isUrgent && task.isImportant);
  // Group tasks by status
  const importantNotUrgentData = [['Status', 'Count']];
  taskStatuses.reduce((accumulator: Array<Array<string | number>>, taskStatus: TaskStatusType) => {
    accumulator.push([
      taskStatus.name,
      importantNotUrgentTasks.filter((task: TaskType) => task.status === taskStatus.name).length,
    ]);
    return accumulator;
  }, importantNotUrgentData);

  // Filter tasks by urgent && not important
  const urgentNotImportantTasks = tasks.filter((task: TaskType) => task.isUrgent && !task.isImportant);
  // Group tasks by status
  const urgentNotImportantTasksData = [['Status', 'Count']];
  taskStatuses.reduce((accumulator: Array<Array<string | number>>, taskStatus: TaskStatusType) => {
    accumulator.push([
      taskStatus.name,
      urgentNotImportantTasks.filter((task: TaskType) => task.status === taskStatus.name).length,
    ]);
    return accumulator;
  }, urgentNotImportantTasksData);

  // Filter tasks by not urgent && not important
  const notUrgentNotImportantTasks = tasks.filter((task: TaskType) => !task.isUrgent && !task.isImportant);
  // Group tasks by status
  const notUrgentNotImportantTasksData = [['Status', 'Count']];
  taskStatuses.reduce((accumulator: Array<Array<string | number>>, taskStatus: TaskStatusType) => {
    accumulator.push([
      taskStatus.name,
      notUrgentNotImportantTasks.filter((task: TaskType) => task.status === taskStatus.name).length,
    ]);
    return accumulator;
  }, notUrgentNotImportantTasksData);

  return (<>
    <hgroup>
      <h1>Report</h1>
      <h2>Current status and progress report</h2>
    </hgroup>
    <Chart
      chartType="PieChart"
      data={allTasksData}
      options={{
        title: 'All Tasks by Status'
      }}
      width={'100%'}
      height={'400px'}
    />
    <Chart
      chartType="PieChart"
      data={importantUrgentData}
      options={{
        title: 'All Urgent and Important Tasks by Status'
      }}
      width={'100%'}
      height={'400px'}
    />
    <Chart
      chartType="PieChart"
      data={urgentNotImportantTasksData}
      options={{
        title: 'All Important but Not Urgent Tasks by Status'
      }}
      width={'100%'}
      height={'400px'}
    />
    <Chart
      chartType="PieChart"
      data={urgentNotImportantTasksData}
      options={{
        title: 'All Urgent but Not Important Tasks by Status'
      }}
      width={'100%'}
      height={'400px'}
    />
    <Chart
      chartType="PieChart"
      data={notUrgentNotImportantTasksData}
      options={{
        title: 'All Not Urgent and Not Important Tasks by Status'
      }}
      width={'100%'}
      height={'400px'}
    />
  </>);
}

export const loader:LoaderFunction = async({ request }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const tasks = await searchTasks({userId: user.id});
  const taskStatuses = await readAllTaskStatus();
  return json({
    tasks,
    taskStatuses,
  });
}

export const meta:MetaFunction = () => {
  return {
    title: 'Reports - Team Task Manager',
    description: 'Reports page',
  };
};