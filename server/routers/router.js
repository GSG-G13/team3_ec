/* eslint-disable import/extensions */
import express from 'express';
import { addUser, getProducts } from '../controller/index.js';

import { errHandling } from '../middleware/error.js';

const router = express.Router();

router.post('/signup', addUser, errHandling);
router.get('/products', getProducts);
router.get('/', (req, res) => {
  res.json({
    mes: 'hello',
  });
});

export default router;
