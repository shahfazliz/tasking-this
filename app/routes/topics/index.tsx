import { CreateNavLink, DeleteNavLink, UpdateNavLink } from '~/ui-components/BasicNavLink';
import { Form, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { ProjectType } from '~/model/Project';
import { readAll as readAllProjects } from '~/resource/Projects';
import { addProject as addTopicIntoProject, eraseProject as eraseTopicFromProject, readAll as readAllTopics } from '~/resource/Topics';
import { UserType } from '~/model/User';
import Chip from '~/ui-components/Chip';
import LabelSelect from '~/ui-components/LabelSelect';
import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { getUserSession } from '~/session';
import { sanitizeData } from '~/sanitizerForm';
import { searchProject as searchUserProject, searchTopic as searchUserTopic } from '~/model/User';

const ACTION_ADD_PROJECT = 'add-project';
const ACTION_REMOVE_PROJECT = 'remove-project';

type DataPropType = {
  id: number,
  name: string,
  description: string,
  createdBy: UserType,
  updatedBy: UserType,
  createdAt: string,
  updatedAt: string,
  projects: ProjectType[],
}

type RowPropType = {
  topics: DataPropType[];
  allProjects: ProjectType[];
}

export default function AllTopics() {
  const { topics, allProjects } = useLoaderData<typeof loader>();

  return (<>
    <hgroup>
      <h1>Topics</h1>
      <h2>All Topics</h2>
    </hgroup>
    <Rows topics={topics} allProjects={allProjects}/>
    <CreateNavLink role='button' to='./create' text='Add New Topic'/>
  </>);
}

const ProjectChips = ({projects, topicId}:{projects:ProjectType[], topicId:number}) => {
  return (<>
    {
      projects.length === 0
        ? 'there is no project associated to this topic'
        : projects.map((project) => {
          return ( 
            <Chip
              key={project.id}
              actionName={ACTION_REMOVE_PROJECT}
              data={{projectId: project.id, topicId}}
              editable={true}
            >
              {project.name}
            </Chip>
          );
        })
    }
  </>);
};

const ProjectSelectOptions = ({topicId, allProject}:{topicId:number, allProject:ProjectType[]}) => {
  return (
    <Form method='post'>
      <input type='hidden' name='topicId' value={topicId} />
      <LabelSelect name={ACTION_ADD_PROJECT} options={allProject} />
      <button
        type='submit'
        name='_action'
        value={ACTION_ADD_PROJECT}
        aria-label={ACTION_ADD_PROJECT}
      >
        add
      </button>
    </Form>
  );
}

const Rows = ({topics, allProjects}:RowPropType) => {
  return (<>
    {
      topics.map((
        {
          id,
          name,
          description,
          createdBy,
          updatedBy,
          createdAt,
          updatedAt,
          projects,
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
              <li>Projects: <ProjectChips projects={projects} topicId={id}/></li>
            </ul>
            <ProjectSelectOptions allProject={allProjects} topicId={id}/>
          </details>
        );
      })
    }
  </>);
};

export const loader:LoaderFunction = async({ request, params }:LoaderArgs) => {
  const { user } = await getUserSession(request);
  const userTopics = await searchUserTopic({userId: user.id});
  const userProjects = await searchUserProject({userId: user.id});
  
  return json({
    topics: userTopics,
    allProjects: userProjects,
  });
}

export const action:ActionFunction = async({request}) => {
  const { user } = await getUserSession(request);
  const {_action, topicId, ...values} = sanitizeData({formData: await request.formData()});
  
  switch (_action) {
    case ACTION_ADD_PROJECT:
      await addTopicIntoProject({
        createdByUserId: user.id,
        topicId,
        projectId: values[ACTION_ADD_PROJECT],
      });
      break;
    case ACTION_REMOVE_PROJECT: 
      await eraseTopicFromProject({projectId: values.projectId, topicId});
      break;
    default:
      break;
  }

  return null;
};

export const meta:MetaFunction = () => {
  return {
    title: 'Topics - Team Task Manager',
    description: 'Topics page',
  };
};