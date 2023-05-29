import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchProject } from '~/model/Project';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import ProjectForm from '~/ui-components/ProjectForm';
import { search as searchOrganization } from '~/model/Organization';

export default function UpdateProject() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { project, organizations } = useLoaderData();

  return (<>
    <hgroup>
      <h1>Projects</h1>
      <h2>Update Project</h2>
    </hgroup>
    <ProjectForm {...project} organizationOptions={organizations} isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchProject({id: params.id});
  const { user } = await getUserSession(request);
  const organizations = await searchOrganization({createdByUserId: user.id});
  return json({
    project: objs[0],
    organizations,
  });
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description, organization } = sanitizeData({formData: await request.formData()});
  const organizations = await searchOrganization({id: organization});

  const objs = await searchProject({id: params.id});
  objs[0]
    .set({
      name,
      description,
      organization: organizations[0],
      updatedBy: user,
    })
    .update();

  return redirect('/projects')
}