import { createPool, Pool } from 'mysql2';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 5, checkperiod: 60 });

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
    connectionLimit: 100,
    queueLimit: 100,
  });
  
  return pool.promise();
}

const db = connect();

async function execute(query, values) {
  const isInsertOperation = query.includes('INSERT INTO ');
  if (isInsertOperation) {
    return await db.execute(query, values);
  }
  
  const key = JSON.stringify({query, values});
  const cachedResult = cache.get(key);
  if (cachedResult) {
    return cachedResult;
  }

  const [rows, response] = await db.execute(query, values);
  cache.set(key, [rows, response]);
  return [rows, response];
}

export default {
  execute,
};