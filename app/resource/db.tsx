import { createPool, Pool } from 'mysql2';

let pool:Pool | undefined = undefined;

function connect() {
  if (pool !== undefined) {
    return pool?.promise();
  }

  pool = createPool({
    host: process.env.TTDBHOST,
    user: process.env.TTDBUSERNAME,
    password: process.env.TTDBPASSWORD,
    database: 'eisenhowermatrix',
  });
  
  return pool.promise();
}

export default connect();