import * as bcrybt from 'bcrypt';
import { SignUpSchema } from '../../validation/AuthSchema.js';
import { addUserQuery } from '../../database/queries/auth/signupquery.js';
import { jwtSign } from '../../helper/jwtSign.js';
import CustomError from '../../helper/CustomError.js';

const addUser = (req, res, next) => {
  const { password } = req.body;
  let userData;
  SignUpSchema.validateAsync(req.body, { abortEarly: false })
    .then(() => bcrybt.hash(password, 7))
    .then((hashedPassword) => {
      req.body.password = hashedPassword;
      return addUserQuery(req.body);
    })
    .then((data) => {
      userData = data.rows[0];
      return jwtSign(data.rows[0]);
    })
    .then((token) => {
      res.cookie('token', token, { path: '/' }).json({
        error: false,
        message: 'User Logged In Successfully',
        data: userData,
      });
    })
    .catch((err) => {
      if (err.isJoi) {
        next(new CustomError(400, err.details));
      } else {
        next(new CustomError(400, 'This email is already existed'));
      }
    });
};
export default addUser;
