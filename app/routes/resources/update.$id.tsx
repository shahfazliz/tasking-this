import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useTransition as useNavigation } from '@remix-run/react';
import { search as searchResource } from '~/model/Resource';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import ResourceForm from '~/ui-components/ResourceForm';

export default function DeleteResource() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useLoaderData();

  return (<>
    <hgroup>
      <h1>Resources</h1>
      <h2>Update Resources</h2>
    </hgroup>
    <ResourceForm {...data} isSubmitting={isSubmitting} />
  </>);
}

export const loader:LoaderFunction = async({request, params}) => {
  const objs = await searchResource({id: params.id});
  return json(objs[0]);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});

  const objs = await searchResource({id: params.id});
  objs[0]
    .set({
      name,
      description,
      updatedBy: user,
    })
    .update();

  return redirect('/resources')
}