import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';
import LabelTextarea from './LabelTextarea';

export default function PermissionForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
}) {
  const isToCreate = !name && !description;

  return (
    <Form method='post'>
      <FieldsetLegend title='permission details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='permission name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelTextarea
          defaultValue={description}
          name='description'
          placeholder='enter description of the permission'
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
