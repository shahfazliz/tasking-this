import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchProject } from '~/model/Project';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import ProjectForm from '~/ui-components/ProjectForm';

export default function DeleteProject() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();

  return (<>
    <hgroup>
      <h1>Projects</h1>
      <h2>Update Project</h2>
    </hgroup>
    <ProjectForm {...data} isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchProject({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});

  const objs = await searchProject({id: params.id});
  objs[0]
    .set({
      name,
      description,
      updatedBy: user,
    })
    .update();

  return redirect('/projects')
}