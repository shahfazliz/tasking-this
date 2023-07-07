import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchOrganization } from '~/model/Organization';
import { search as searchRole } from '~/model/Role';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import RoleForm from '~/ui-components/RoleForm';

export default function DeleteRole() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { role, organizations } = useLoaderData();

  return (<>
    <hgroup>
      <h1>Roles</h1>
      <h2>Update Role</h2>
    </hgroup>
    <RoleForm
      {...role}
      // organizationOptions={organizations}
      isSubmitting={isSubmitting}
    />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const roles = await searchRole({id: params.id});
  const organizations = await searchOrganization({createdByUserId: user.id})
  return json({
    role: roles[0],
    organizations,
  });
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});

  const objs = await searchRole({id: params.id});
  objs[0]
    .set({
      name,
      description,
      updatedBy: user,
    })
    .update();

  return redirect('/roles')
}