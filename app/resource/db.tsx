import mysql from 'mysql2/promise';

async function createConnection() {
  return await mysql.createConnection({
    host: process.env.TTDBHOST,
    user: process.env.TTDBUSERNAME,
    password: process.env.TTDBPASSWORD,
    database: 'eisenhowermatrix',
  });
}

export default createConnection;