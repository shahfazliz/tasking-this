import db from '~/resource/db';

async function create({
  name,
  description,
  createdByUserId,
}) {
  await db.execute(`
    INSERT INTO TaskTopic (
      name,
      description,
      createdByUserId,
      updatedByUserId
    )
    VALUES (?, ?, ?, ?)
  `, [
    name,
    description,
    createdByUserId,
    createdByUserId,
  ]);
}

async function readAll() {
  const [rows] = await db.execute('SELECT * FROM TaskTopic');
  return rows;
}

async function update({
  id,
  name,
  description,
  updatedByUserId,
}) {
  await db.execute(`
    UPDATE TaskTopic 
    SET
      name = ?,
      description = ?,
      updatedByUserId = ?
    WHERE id = ?
  `, [
    name,
    description,
    updatedByUserId,
    id,
  ]);
}

async function del({ id }) {
  await db.execute(`DELETE FROM TaskTopic WHERE id = ?`, [id]);
}

export {
  create,
  readAll,
  update,
  del,
};
