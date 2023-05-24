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


// export const getProductsByFilterAndSearch = (price, category, search) => {

//   console.log(price, category, search, 'lllllllllllllll');
//   let arr = [price]
//   if(category !== 'all') arr.push(category)
//   else if(search !== "") arr.push(search)
//   console.log(arr,'999999999999999999');
//   return connection.query(
//     `
//     SELECT * FROM products WHERE price <= $1 
//     ${category != "all" ? 'AND category = $2':""} 
//     ${search != "" ? `AND name iLike '%$3%'` :""} 
//     `, arr
//   )
// }

export const getProductsByFilterAndSearch = (price, category, search) => {
  console.log(price, category, search, 'lllllllllllllll');
  let arr = [price];

  if (category !== 'all') {
    arr.push(category);
  }

  if (search !== '') {
    arr.push(`%${search}%`);
  }
  let query = `
    SELECT * FROM products WHERE price <= $1 
    ${category !== 'all' ? 'AND category = $2' : ''}
    ${search !== '' ? `AND name ILIKE ${category === 'all' ? '$2' : '$3'}`  : ''}
  `;

  

  console.log(arr, '999999999999999999');
  return connection.query(query, arr);
};

