import { CreateNavLink, DeleteNavLink, UpdateNavLink } from '~/ui-components/BasicNavLink';
import { Form, useLoaderData } from '@remix-run/react';
import { ActionFunction, json } from '@remix-run/node';
import { addTopic as addResourceIntoTopic, eraseTopic as eraseResourceFromTopic, readAll as readAllResources } from '~/resource/Resources';
import { readAll as readAllTopics } from '~/resource/Topics';
import { TopicType } from '~/model/Topic';
import { UserType } from '~/model/User';
import Chip from '~/ui-components/Chip';
import LabelSelect from '~/ui-components/LabelSelect';
import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { getUserSession } from '~/session';
import { sanitizeData } from '~/sanitizerForm';

const ACTION_ADD_TOPIC = 'add-topic';
const ACTION_REMOVE_TOPIC = 'remove-topic';

type DataPropType = {
  id: number;
  name: string;
  description: string;
  createdBy: UserType;
  updatedBy: UserType;
  createdAt: string;
  updatedAt: string;
  topics: TopicType[];
}

type RowPropType = {
  resource: DataPropType[];
  allTopics: TopicType[];
}

export default function AllResources() {
  const { resource, allTopics } = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Resources</h1>
      <h2>All Resources</h2>
    </hgroup>
    <Rows resource={resource} allTopics={allTopics}/>
    <CreateNavLink role='button' to='./create' text='Create Resource'/>
  </>);
}

const TopicChips = ({topics, resourceId}:{topics:TopicType[], resourceId:number}) => {
  return (<>
    {
      topics.length === 0
        ? 'there is no topic associated to this resource'
        : topics.map((topic) => {
          return ( 
            <Chip
              key={topic.id}
              actionName={ACTION_REMOVE_TOPIC}
              data={{topicId: topic.id, resourceId}}
            >
              {topic.name}
            </Chip>
          );
        })
    }
  </>);
};

const TopicSelectOptions = ({resourceId, allTopics}:{resourceId:number, allTopics:TopicType[]}) => {
  return (
    <Form method='post'>
      <input type='hidden' name='resourceId' value={resourceId} />
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

const Rows = ({resource, allTopics}:RowPropType) => {
  return (<>
    {
      resource.map((
        {
          id,
          name,
          description,
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
              <UpdateNavLink to={`./update/${id}`} />
              <DeleteNavLink to={`./delete/${id}`} />
            </summary>
            <ul>
              <li>Description: {description}</li>
              <li>Created by: {createdBy.name} on {createdAt}</li>
              <li>Last updated by: {updatedBy.name} on {updatedAt}</li>
              <li>Projects: <TopicChips topics={topics} resourceId={id}/></li>
            </ul>
            <TopicSelectOptions allTopics={allTopics} resourceId={id}/>
          </details>
        );
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ params }:LoaderArgs) => {
  const resource = await readAllResources();
  const allTopics = await readAllTopics();
  return json({
    resource,
    allTopics,
  });
}

export const action:ActionFunction = async({request}) => {
  const { user } = await getUserSession(request);
  const {_action, resourceId, ...values} = sanitizeData({formData: await request.formData()});
  
  switch (_action) {
    case ACTION_ADD_TOPIC:
      await addResourceIntoTopic({
        createdByUserId: user.id,
        resourceId,
        topicId: values[ACTION_ADD_TOPIC],
      });
      break;
    case ACTION_REMOVE_TOPIC: 
      await eraseResourceFromTopic({topicId: values.topicId, resourceId});
      break;
    default:
      break;
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Resources - Team Task Manager',
    description: 'Resources page',
  };
};