import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import { Permission } from '~/model/Permission';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import PermissionForm from '~/ui-components/PermissionForm';

export default function CreatePermission() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Permissions</h1>
      <h2>Create a Permission</h2>
    </hgroup>
    <PermissionForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});
  
  const permission = new Permission({
    name,
    description,
    createdBy: user,
    updatedBy: user,
  });
  
  await permission.create();
  
  return redirect('/permissions');
}