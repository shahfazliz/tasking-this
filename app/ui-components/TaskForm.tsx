import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';
import LabelTextarea from './LabelTextarea';

const levelUrgent = [{
  id: 0,
  name: 'Not Urgent',
}, {
  id: 1,
  name: 'Urgent',
}];

const levelImportant = [{
  id: 0,
  name: 'Not Important',
}, {
  id: 1,
  name: 'Important',
}];

export default function TaskForm({
  children = <></>,
  description = '',
  isSubmitting = false,
  name = '',
  users = [],
  taskStatus = {},
  taskStatuses = [],
  timeEstimate = 0,
  assignedTo = {},
  isImportant = 0,
  isUrgent = 0,
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
          defaultValue={assignedTo.id}
          name='assign-to'
          options={users}
          tabIndex={4}
        />
        <LabelSelect
          defaultValue={taskStatus.id}
          name='status'
          options={taskStatuses}
          tabIndex={5}
        />
        <LabelSelect
          defaultValue={isImportant.toString()}
          name='importance'
          options={levelImportant}
          tabIndex={6}
        />
        <LabelSelect
          defaultValue={isUrgent.toString()}
          name='urgency'
          options={levelUrgent}
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
