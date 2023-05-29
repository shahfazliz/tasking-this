import { createPool, Pool } from 'mysql2';
import NodeCache from 'node-cache';

let cache:NodeCache | undefined = undefined;
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

function getCache() {
  if (cache !== undefined) {
    return cache;
  }

  cache = new NodeCache({ stdTTL: 5, checkperiod: 60 });
  return cache;
}

async function execute(query:string, values:string[]) {
  let connection;
  let result;
  const isSelectOperation = query.includes('SELECT ');
  if (!isSelectOperation) {
    let connection;
    let result;
    try {
      connection = await db.getConnection();
      result = await connection.execute(query, values);
    } catch (error) {
      throw error;
    } finally {
      if (connection) {
        connection.release();
        return result;
      }
    }
  }
  
  const key = JSON.stringify({query, values});
  const cache = getCache();
  const cachedResult = cache.get(key);
  if (cachedResult) {
    return cachedResult;
  }

  try {
    connection = await db.getConnection();
    result = await connection.execute(query, values);
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      connection.release();
      cache.set(key, result);
      return result;
    }
  }
}

export default {
  execute,
};