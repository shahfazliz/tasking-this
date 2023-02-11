import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import { Organization } from '~/model/Organization';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import OrganizationForm from '~/ui-components/OrganizationForm';

export default function CreateOrganization() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Organizations</h1>
      <h2>Create an organization</h2>
    </hgroup>
    <OrganizationForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});

  const organization = new Organization({
    name,
    description,
    createdBy: user,
    updatedBy: user,
  });

  await organization.create();
  
  return redirect('/organizations');
}