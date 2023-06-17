import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';
import LabelTextarea from './LabelTextarea';
import LabelColor from './LabelColor';

export default function TaskStatusForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
  color = '#FFFFFF'
}) {
  const isToCreate = !name && !description;

  return (
    <Form method='post'>
      <FieldsetLegend title='task status details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='task status name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelColor
          name='color'
          required={true}
          tabIndex={2}
          defaultValue={color}
        />
        <LabelTextarea
          defaultValue={description}
          name='description'
          placeholder='enter description of the task status'
          required={false}
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
