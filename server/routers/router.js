import express from 'express';
import {
  logOutController, signinController, addUser, getProducts, getProductById, deleteCartController
} from '../controller/index.js';
import { errHandling } from '../middleware/error.js';
import authChecker from '../middleware/authChecker.js';
import { getCartItem } from '../controller/getCartItem.js';
import addCartItem from '../controller/addCartItem.js';


const router = express.Router();

router.post('/signup', addUser, errHandling);
router.get('/product/:id', getProductById);
router.post('/signin', signinController, errHandling);
router.use('/logout', logOutController);
router.get('/products', getProducts)
router.get('/cart', authChecker, getCartItem, errHandling)
router.post('/cart', authChecker, addCartItem, errHandling);
router.delete('/cart/:id', authChecker, deleteCartController)
export default router;
