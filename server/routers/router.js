const express = require('express');
const {
  logOutController, signinController, addUser, getProducts, getProductById, deleteCartController, getProductsCount
} = require('../controller/index.js');
const { errHandling } = require('../middleware/error.js');
const authChecker = require('../middleware/authChecker.js');

const { getCartItem } = require('../controller/getCartItem.js');
const { addCartItem } = require('../controller/addCartItem.js');


const router = express.Router();

router.post('/signup', addUser, errHandling);
router.get('/product/:id', getProductById);
router.post('/signin', signinController, errHandling);
router.use('/logout', logOutController);
router.get('/count', getProductsCount )
router.get('/products', getProducts)
router.get('/cart', authChecker, getCartItem, errHandling)
router.post('/cart', authChecker, addCartItem, errHandling);
router.delete('/cart/:id', authChecker, deleteCartController)

module.exports =  router;
