import express from 'express';
import addUser from '../controller/auth/signup.js';
import signinController from "../controller/auth/signin.js";
import logOutController from "../controller/auth/logout.js";
import { errHandling } from '../middleware/error.js';
import { getProducts } from '../controller/getProducts.js'
import authChecker from '../middleware/authChecker.js';
import { getCartItem } from '../controller/getCartItem.js';
import addCartItem from '../controller/addCartItem.js';

const router = express.Router();

router.post('/signup', addUser, errHandling);
router.post('/signin', signinController, errHandling);
router.use('/logout', logOutController);
router.get('/products', getProducts)
router.get('/cart', authChecker, getCartItem, errHandling)
router.post('/cart', authChecker, addCartItem, errHandling)
export default router;
