import db from '~/resource/db';

async function create({
  name,
  description,
  createdByUserId,
}) {
  db.execute(`
    INSERT INTO UserOrganization (
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
  const [rows] = await db.execute('SELECT * FROM UserOrganization');
  return rows;
}

async function update({
  id,
  name,
  description,
  updatedByUserId,
}) {
  db.execute(`
    UPDATE UserOrganization 
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
  db.execute(`DELETE FROM UserOrganization WHERE id = ?`, [id]);
}

export {
  create,
  readAll,
  update,
  del,
};
