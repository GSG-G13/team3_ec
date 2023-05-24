import { getAllProducts, getProduct, getProductsByFilterAndSearch } from '../database/queries/getData.js';


export const getProducts = (req, res) => {
  console.log(req.query);
  const {price, category, search} = req.query
  getProductsByFilterAndSearch(price, category, search).then((data) => res.json({
    error: false,
    message: 'Fetch data successfully',
    data: data.rows
  }));
};
export const getProductById = (req, res) => {
  const { id } = req.params;
  getProduct(id).then(data => res.json({
    error: false,
    data: data.rows,
  }))
}