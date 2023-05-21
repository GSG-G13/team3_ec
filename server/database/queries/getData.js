import connection from '../config/config/connection.js';

export const getAllProducts = () => connection.query(
  'SELECT * FROM products',
);
