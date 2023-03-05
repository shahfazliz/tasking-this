import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';
import LabelTextarea from './LabelTextarea';

const level = [{
  id: 0,
  name: 'Low',
}, {
  id: 1,
  name: 'High',
}];

export default function TaskForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
  users = [],
  taskStatus = [],
  timeEstimate = '',
}) {
  const isToCreate = !name && !description;

  return (
    <Form method='post'>
      <FieldsetLegend title='task details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='task name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelTextarea
          defaultValue={description}
          name='description'
          placeholder='enter description of the task'
          required={false}
          tabIndex={2}
        />
        <LabelInput
          defaultValue={`${timeEstimate}`}
          name='time-estimate'
          placeholder='in hours'
          required={false}
          tabIndex={3}
          type='number'
        />
        <LabelSelect
          name='assign-to'
          options={users}
          tabIndex={4}
        />
        <LabelSelect
          name='status'
          options={taskStatus}
          tabIndex={5}
        />
        <LabelSelect
          name='importance'
          options={level}
          tabIndex={6}
        />
        <LabelSelect
          name='urgency'
          options={level}
          tabIndex={7} />
      </FieldsetLegend>
      { children }
      <button
        type='submit'
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
