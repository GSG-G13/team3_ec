import { getAllProducts } from '../database/queries/products/getProducts.js';

export const getProducts = (req, res) => {
  getAllProducts().then((data) => res.json(data.rows));
};

