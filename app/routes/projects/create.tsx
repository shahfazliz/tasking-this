import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import {
  useLoaderData,
  useTransition as useNavigation
} from '@remix-run/react';
import { search as searchOrganization } from '~/model/Organization';
import { Project } from '~/model/Project';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import ProjectForm from '~/ui-components/ProjectForm';

export default function CreateProject() {
  const organizations = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Projects</h1>
      <h2>Create a Project</h2>
    </hgroup>
    <ProjectForm
      organizationOptions={organizations}
      isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const organizations = await searchOrganization({createdByUserId: user.id});
  return json(organizations);
};

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description, organization } = sanitizeData({formData: await request.formData()});
  const organizations = await searchOrganization({
    name: organization,
    createdByUserId: user.id,
  });

  const project = new Project({
    name,
    description,
    organization: organizations[0],
    createdBy: user,
    updatedBy: user,
  });

  await project.create();
  
  return redirect('/projects');
}