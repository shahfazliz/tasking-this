import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import {
  useLoaderData,
  useTransition as useNavigation
} from '@remix-run/react';
import { search as searchOrganization } from '~/model/Organization';
import { Role } from '~/model/Role';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import RoleForm from '~/ui-components/RoleForm';

export default function CreateRole() {
  // const organizations = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Roles</h1>
      <h2>Create a Role</h2>
    </hgroup>
    <RoleForm
      isSubmitting={isSubmitting}
      // organizationOptions={organizations}
    />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const organizations = await searchOrganization({createdByUserId: user.id});
  return json(organizations);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { 
    name,
    description,
    // organization,
   } = sanitizeData({formData: await request.formData()});
  
  // const organizations = await searchOrganization({
  //   id: organization,
  //   createdByUserId: user.id,
  // });

  const role = new Role({
    name,
    description,
    // organization: organizations[0],
    createdBy: user,
    updatedBy: user,
  });

  await role.create();
  
  return redirect('/roles');
}