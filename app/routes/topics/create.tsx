import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  useTransition as useNavigation
} from '@remix-run/react';
import { Topic } from '~/model/Topic';
import { sanitizeData } from '~/sanitizerForm';
import { getUserSession } from '~/session';
import TopicForm from '~/ui-components/TopicForm';

export default function CreateTopic() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (<>
    <hgroup>
      <h1>Topics</h1>
      <h2>Create Topic</h2>
    </hgroup>
    <TopicForm isSubmitting={isSubmitting} />
  </>);
}

export const action:ActionFunction = async({request, params}) => {
  const { user } = await getUserSession(request);
  const { name, description } = sanitizeData({formData: await request.formData()});
  
  const topic = new Topic({
    name,
    description,
    createdBy: user,
    updatedBy: user,
  });

  await topic.create();
  
  return redirect('/topics');
}