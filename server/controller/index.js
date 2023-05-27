const addUser = require('./auth/signup.js');
const signinController = require('./auth/signin.js');
const logOutController = require('./auth/logout.js');
const { getProducts, getProductById, getProductsCount } = require('./getData.js');
const {deleteCartController} = require("./deletecart.js");

module.exports =  {
  addUser, getProducts, logOutController, signinController, getProductById, deleteCartController, getProductsCount
};
