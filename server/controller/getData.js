import { getAllProducts } from '../database/queries/getData.js';

export const getProducts = (req, res) => {
  getAllProducts().then((data) => res.json(data.rows));
};
