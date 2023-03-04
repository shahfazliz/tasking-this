import db from '~/resource/db';

async function create({
  name,
  description,
  createdByUserId,
}) {
  await db.execute(`
    INSERT INTO UserProject (
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
  const [rows] = await db.execute('SELECT * FROM UserProject');
  return rows;
}

async function update({
  id,
  name,
  description,
  updatedByUserId,
}) {
  await db.execute(`
    UPDATE UserProject 
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
  await db.execute(`DELETE FROM UserProject WHERE id = ?`, [id]);
}

export {
  create,
  readAll,
  update,
  del,
};
