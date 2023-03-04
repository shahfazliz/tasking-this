import db from './db';

async function create({
  name,
  description,
  createdByUserId,
}) {
  await db.execute(`
    INSERT INTO ResourceTopic (
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
  const [rows] = await db.execute('SELECT * FROM ResourceTopic');
  return rows;
}

async function update({
  id,
  name,
  description,
  updatedByUserId,
}) {
  await db.execute(`
    UPDATE ResourceTopic 
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
  await db.execute(`DELETE FROM ResourceTopic WHERE id = ?`, [id]);
}

export {
  create,
  readAll,
  update,
  del,
};
