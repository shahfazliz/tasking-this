import { Form } from '@remix-run/react';
import FieldsetLegend from '~/ui-components/FieldsetLegend';
import LabelInput from '~/ui-components/LabelInput';
import LabelSelect from '~/ui-components/LabelSelect';
import LabelTextarea from '~/ui-components/LabelTextarea';

export default function ProjectForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
  organizationOptions = [],
  organization = {name: ''},
}) {
  const isToCreate = !name && !description;

  return (
    <Form method='post'>
      <FieldsetLegend title='project details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='project name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelTextarea
          defaultValue={description}
          name='description'
          placeholder='enter description of the project'
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
        tabIndex={3}
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
