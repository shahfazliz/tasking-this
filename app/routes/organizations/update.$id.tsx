import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchOrganization } from '~/model/Organization';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import OrganizationForm from '~/ui-components/OrganizationForm';

export default function DeleteOrganization() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();

  return (<>
    <hgroup>
      <h1>Organizations</h1>
      <h2>Update organization?</h2>
    </hgroup>
    <OrganizationForm {...data} isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchOrganization({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});

  const objs = await searchOrganization({id: params.id});
  objs[0]
    .set({
      name,
      description,
      updatedBy: user,
    })
    .update();

  return redirect('/organizations')
}