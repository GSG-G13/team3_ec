// import { } from 'dotenv/config';
// import bcrypt from 'bcrypt';
// import signInQuery from '../../database/queries/auth/signinquery.js';
// import { jwtSign } from '../../helper/jwtSign.js';
// import CustomError from '../../helper/CustomError.js';
// import { LoginSchema } from '../../validation/login.js';
require('dotenv').config
const bcrypt = require('bcrypt')
const signInQuery = require('../../database/queries/auth/signinquery.js')
const { jwtSign } = require('../../helper/jwtSign.js')
const CustomError = require('../../helper/CustomError.js')
const { LoginSchema } = require('../../validation/login.js')

const signinController = (req, res, next) => {
  const { email, password } = req.body;
  LoginSchema.validateAsync({ email, password }, { abortEarly: false })
    .then(() => signInQuery(email))
    .then((data) => {
      if (data.rowCount === 0) {
        throw new CustomError(400, ['this email does not exists!!']);
      } else {
        req.user = data.rows[0];
        return bcrypt.compare(password, data.rows[0].password);
      }
    })
    .then((isMatch) => {
      if (isMatch) {
        return jwtSign({
          id: req.user.id, username: req.user.username, password: req.user.password, type: req.user.type, image_url: req.user.image_url,
        }, process.env.SECRET_KEY);
      }
      throw new CustomError(400, ['Invalid password!!']);
    })
    .then((token) => {
      res.cookie('token', token).json({
        status: 200,
        message: 'Sign In successfully ',
        data:req.user.username
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        const message = error.details.map((i) => i.message);
        next(new CustomError(400, message));
      } else {
        next(error);
      }
    });
};

module.exports = signinController;
