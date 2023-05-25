import pkg from 'pg';
import { } from 'dotenv/config';

const { Pool } = pkg;


const { DB_URL, PRO_DB_URL, NODE_ENV } = process.env;
const option = {
  connectionString: NODE_ENV !== 'production' ? DB_URL : PRO_DB_URL,
  ssl: NODE_ENV !== 'production' ? false : true,
};


const connection = new Pool(option);

export default connection;
