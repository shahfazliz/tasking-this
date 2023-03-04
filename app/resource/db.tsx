import mysql from 'mysql2';

const pool = mysql
  .createPool({
    host: process.env.TTDBHOST,
    user: process.env.TTDBUSERNAME,
    password: process.env.TTDBPASSWORD,
    database: 'eisenhowermatrix',
  });

const db = pool.promise();

export default db;