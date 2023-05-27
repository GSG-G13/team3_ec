const  {  getProduct, getProductsByFilterAndSearchWithPage, getProductsCountQuery } = require('../database/queries/getData.js');


exports.getProducts = (req, res) => {
  const {page, price, category, search} = req.query
  getProductsByFilterAndSearchWithPage((page - 1) * 5, price, category, search).then((data) => res.json({
    error: false,
    message: 'Fetch data successfully',
    data: data.rows
  }));
};
exports.getProductById = (req, res) => {
  const { id } = req.params;
  getProduct(id).then(data => res.json({
    error: false,
    data: data.rows,
  }))
}

exports.getProductsCount = (req,res) => {
  
  const { price, category, search } = req.query
  getProductsCountQuery(price, category, search)
  .then(data => res.json({
    error: false,
    message: 'Fetch Count of products successfully',
    count: data.rows[0].count
  }))
}