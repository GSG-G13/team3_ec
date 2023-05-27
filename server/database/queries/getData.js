const connection = require('../config/config/connection.js');

exports.getAllProducts = () => {
  const sql = {
    text: 'SELECT *FROM products',
  };
  return connection.query(sql);
};
exports.getProduct = (id) => {
  const sql = {
    text: 'SELECT *FROM products WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
}

exports.getProductsByFilterAndSearchWithPage = (page, price, category, search) => {

  let arr = [page, price];

  if (category !== 'all') {
    arr.push(category);
  }

  if (search !== '') {
    arr.push(`%${search}%`);
  }
  let query = `
    SELECT * FROM products WHERE price <= $2 
    ${category !== 'all' ? 'AND category = $3' : ''}
    ${search !== '' ? `AND name ILIKE ${category === 'all' ? '$3' : '$4'}` : ''}
    LIMIT 5 OFFSET $1
  `;
  return connection.query(query, arr);
};

exports.getProductsCountQuery = (price, category, search) => {

  let arr = [price];

  if (category !== 'all') {
    arr.push(category);
  }

  if (search !== '') {
    arr.push(`%${search}%`);
  }
  let query = `
    SELECT count(*) FROM products WHERE price <= $1 
    ${category !== 'all' ? 'AND category = $2' : ''}
    ${search !== '' ? `AND name ILIKE ${category === 'all' ? '$2' : '$3'}` : ''}
    
  `;
  return connection.query(query, arr);
}
