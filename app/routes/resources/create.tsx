import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import { Resource } from '~/model/Resource';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import ResourceForm from '~/ui-components/ResourceForm';

export default function CreateResource() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Resources</h1>
      <h2>Create a Resource</h2>
    </hgroup>
    <ResourceForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});
  
  const resource = new Resource({
    name,
    description,
    createdBy: user,
    updatedBy: user,
  });

  await resource.create();
  
  return redirect('/resources');
}