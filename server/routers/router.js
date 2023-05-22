import express from 'express';
import {
  logOutController, signinController, addUser, getProducts,
} from '../controller/index.js';
import { errHandling } from '../middleware/error.js';

const router = express.Router();

router.post('/signup', addUser, errHandling);
router.get('/products', getProducts);
router.post('/signin', signinController, errHandling);
router.use('/logout', logOutController);

export default router;
