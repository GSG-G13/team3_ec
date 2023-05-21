import connection from '../config/config/connection.js';

export const getAllProducts = () => {
  const sql = {
    text: 'SELECT *FROM products',
  };
  return connection.query(sql);
};
