import createConnection from './db';

async function create({
  name,
  description,
  createdByUserId,
}) {
  const connection = await createConnection();
  connection.execute(`
    INSERT INTO UserRole (
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
  connection.end();
}

async function readAll() {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT * FROM UserRole');
  connection.end();
  return rows;
}

async function update({
  id,
  name,
  description,
  updatedByUserId,
}) {
  const connection = await createConnection();
  connection.execute(`
    UPDATE UserRole 
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
  connection.end();
}

async function del({ id }) {
  const connection = await createConnection();
  connection.execute(`DELETE FROM UserRole WHERE id = ?`, [id]);
  connection.end();
}

export {
  create,
  readAll,
  update,
  del,
};
