import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';
import LabelTextarea from './LabelTextarea';

export default function OrganizationForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
}) {
  const isToCreate = !name && !description;

  return (
    <Form method='post'>
      <FieldsetLegend title='organization details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='organization name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelTextarea
          defaultValue={description}
          name='description'
          placeholder='enter description of the organization'
          required={false}
          tabIndex={2}
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
