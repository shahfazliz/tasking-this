import db from '~/resource/db';

async function searchTasks({userId}: {userId: number}) {
  // Query list of all tasks of this user
  const query = `
    SELECT
      task.*,
      taskStatus.name as status,
      topic.name as topic,
      project.name as project,
      org.name as organization
    FROM Tasks AS task
    LEFT JOIN TaskStatus AS taskStatus ON task.taskStatusId=taskStatus.id
    LEFT JOIN TaskTopic AS taskTopic ON task.id=taskTopic.taskId
    LEFT JOIN Topics AS topic ON taskTopic.topicId=topic.id
    LEFT JOIN ProjectTopic AS projectTopic ON topic.id=projectTopic.topicId
    LEFT JOIN Projects AS project ON projectTopic.projectId=project.id
    LEFT JOIN Organizations AS org ON project.organizationId=org.id
    WHERE assignedToUserId=?
  `;
  const values = [`${userId}`];
  const [rows] = await db.execute(query, values);
  return rows;
}

export {
  searchTasks,
};
