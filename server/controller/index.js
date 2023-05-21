import addUser from './auth/signup.js';
import signinController from './auth/signin.js';
import logOutController from './auth/logout.js';
import { getProducts } from './getData.js';

export {
  addUser, getProducts, logOutController, signinController,
};
