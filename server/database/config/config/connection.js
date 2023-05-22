import pkg from 'pg';
import { } from 'dotenv/config';

const { Pool } = pkg;

const { DB_URL, NODE_ENV } = process.env;
const option = {
  connectionString: DB_URL,
  ssl: false,
};

const connection = new Pool(option);

export default connection;