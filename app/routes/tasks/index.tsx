import { ActionFunction, json } from '@remix-run/node';
import { addTopic as addTaskIntoTopic, eraseTopic as eraseTaskFromTopic, readAll as readAllTasks } from '~/resource/Tasks';
import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';
import { Form, useLoaderData } from '@remix-run/react';
import { getUserSession } from '~/session';
import { readAll as readAllTopics } from '~/resource/Topics';
import { sanitizeData } from '~/sanitizerForm';
import { TaskStatusType } from '~/model/TaskStatus';
import { TopicType } from '~/model/Topic';
import { UserType } from '~/model/User';
import Chip from '~/ui-components/Chip';
import LabelSelect from '~/ui-components/LabelSelect';
import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';

const ACTION_ADD_TOPIC = 'add-topic';
const ACTION_REMOVE_TOPIC = 'remove-topic';

type DataPropType = {
  id: number,
  name: string,
  description: string,
  assignedTo: UserType,
  taskStatus: TaskStatusType,
  isImportant: boolean,
  isUrgent: boolean,
  timeEstimate: number,
  createdBy: UserType,
  updatedBy: UserType,
  createdAt: string,
  updatedAt: string,
  topics: TopicType[],
}

type RowPropType = {
  tasks: DataPropType[];
  allTopics: TopicType[];
}

export default function AllTasks() {
  const { tasks, allTopics } = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Tasks</h1>
      <h2>All Tasks</h2>
    </hgroup>
    <Rows tasks={tasks} allTopics={allTopics}/>
    <NavLink role='button' to='./create'>create</NavLink>
  </>);
}

const TopicChips = ({topics, taskId}:{topics:TopicType[], taskId:number}) => {
  return (<>
    {
      topics.length === 0
        ? 'there is no topic associated to this task'
        : topics.map((topic) => {
          return ( 
            <Chip
              key={topic.id}
              actionName={ACTION_REMOVE_TOPIC}
              data={{topicId: topic.id, taskId}}
            >
              {topic.name}
            </Chip>
          );
        })
    }
  </>);
};

const TopicSelectOptions = ({taskId, allTopics}:{taskId:number, allTopics:TopicType[]}) => {
  return (
    <Form method='post'>
      <input type='hidden' name='taskId' value={taskId} />
      <LabelSelect name={ACTION_ADD_TOPIC} options={allTopics} />
      <button
        type='submit'
        name='_action'
        value={ACTION_ADD_TOPIC}
        aria-label={ACTION_ADD_TOPIC}
      >
        add
      </button>
    </Form>
  );
}

const Rows = ({tasks, allTopics}:RowPropType) => {
  return (<>
    {
      tasks.map((
        {
          id,
          name,
          description,
          assignedTo,
          taskStatus,
          isImportant,
          isUrgent,
          timeEstimate,
          createdBy,
          updatedBy,
          createdAt,
          updatedAt,
          topics,
        }:DataPropType,
        index:number
      ) => {
        return (
          <details key={id}>
            <summary className='with-control-button'>
              <span>{ index + 1 }. {name}</span>
              <NavLink to={`./update/${id}`}>update</NavLink>
              <NavLink to={`./delete/${id}`}>delete</NavLink>
            </summary>
            <ul>
              <li>Description: {description}</li>
              <li>Assigned to: {assignedTo.name}</li>
              <li>Task status: {taskStatus.name}</li>
              <li>Important: {isImportant ? 'High' : 'Low'}</li>
              <li>Urgent: {isUrgent ? 'High' : 'Low'}</li>
              <li>Time estimate: {timeEstimate} hour{timeEstimate > 1 && 's'}</li>
              <li>Created by: {createdBy.name} on {createdAt}</li>
              <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
              <li>Projects: <TopicChips topics={topics} taskId={id}/></li>
            </ul>
            <TopicSelectOptions allTopics={allTopics} taskId={id}/>
          </details>
        );
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ params }:LoaderArgs) => {
  const tasks = await readAllTasks();
  const allTopics = await readAllTopics();
  return json({
    tasks,
    allTopics,
  });
}

export const action:ActionFunction = async({request}) => {
  const { user } = await getUserSession(request);
  const {_action, taskId, ...values} = sanitizeData({formData: await request.formData()});
  
  switch (_action) {
    case ACTION_ADD_TOPIC:
      await addTaskIntoTopic({
        createdByUserId: user.id,
        taskId,
        topicId: values[ACTION_ADD_TOPIC],
      });
      break;
    case ACTION_REMOVE_TOPIC: 
      await eraseTaskFromTopic({topicId: values.topicId, taskId});
      break;
    default:
      break;
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Tasks - Team Task Manager',
    description: 'Tasks page',
  };
};
