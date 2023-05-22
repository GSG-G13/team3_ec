import { getAllProducts } from '../database/queries/getData.js';

export const getProducts = (req, res) => {
  getAllProducts().then((data) => res.json({
    error: false,
    message: 'Fetch data successfully',
    data: data.rows
  }));
};
