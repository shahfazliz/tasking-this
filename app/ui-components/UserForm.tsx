import { Form } from '@remix-run/react';
import FieldsetLegend from './FieldsetLegend';
import LabelInput from './LabelInput';

export default function UserForm({
  name = '',
  email = '',
  isSubmitting = false,
  children = <></>,
}) {
  const isToCreate = !name && !email;

  return (
    <Form method='post'>
      <FieldsetLegend title='user details'>
        <LabelInput
          defaultValue={name}
          name='name'
          placeholder='full name'
          required={true}
          tabIndex={1}
          type='text'
        />
        <LabelInput
          defaultValue={email}
          name='email'
          placeholder='email'
          required={true}
          tabIndex={2}
          type='email'
        />
        <LabelInput
          name='password'
          placeholder='password'
          required={true}
          tabIndex={3}
          type='password'
        />
        <LabelInput
          name='confirm-password'
          placeholder='confirm password'
          required={true}
          tabIndex={4}
          type='password'
        />
      </FieldsetLegend>
      { children }
      <button
        tabIndex={5}
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
