import express from 'express';
import addUser from '../controller/auth/signup.js';
import signinController from "../controller/auth/signin.js";
import logOutController from "../controller/auth/logout.js";
import { errHandling } from '../middleware/error.js';

const router = express.Router();

router.post('/signup', addUser, errHandling);
router.post('/signin', signinController, errHandling);
router.use('/logout', logOutController);

export default router;
