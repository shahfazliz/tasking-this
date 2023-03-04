import db from '~/resource/db';

async function create({
  name,
  description,
  createdByUserId,
}) {
  await db.execute(`
    INSERT INTO RolePermission (
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
  const [rows] = await db.execute('SELECT * FROM RolePermission');
  return rows;
}

async function update({
  id,
  name,
  description,
  updatedByUserId,
}) {
  await db.execute(`
    UPDATE RolePermission 
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
  await db.execute(`DELETE FROM RolePermission WHERE id = ?`, [id]);
}

export {
  create,
  readAll,
  update,
  del,
};
