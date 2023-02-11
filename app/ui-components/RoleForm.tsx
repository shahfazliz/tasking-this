import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';
import LabelTextarea from './LabelTextarea';

export default function RoleForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
  organization = {name: ''},
  organizationOptions = [],
}) {
  const isToCreate = !name && !description && !organization?.name;

  return (
    <Form method='post'>
      <FieldsetLegend title='role details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='role name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelTextarea
          defaultValue={description}
          name='description'
          placeholder='enter description of the role'
          required={false}
          tabIndex={2}
        />
        <LabelSelect
          defaultValue={organization.name}
          name='organization'
          options={organizationOptions}
          tabIndex={3}
        />
      </FieldsetLegend>
      { children }
      <button
        tabIndex={4}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {getButtonName(isToCreate, isSubmitting)}
      </button>
    </Form>
  );
}

const getButtonName = (isToCreate, isSubmitting) => {
  if (isToCreate) {
    return isSubmitting
      ? 'submitting ...'
      : 'create';
  }

  return isSubmitting
    ? 'updating ...'
    : 'update';
};
