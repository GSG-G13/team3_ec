import connection from '../config/config/connection.js';

export const getAllProducts = () => {
  const sql = {
    text: 'SELECT *FROM products',
  };
  return connection.query(sql);
};
export const getProduct = (id) => {
  const sql = {
    text: 'SELECT *FROM products WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
}
