import * as bcrybt from 'bcrypt';
import { SignUpSchema } from '../../validation/AuthSchema.js';
import { addUserQuery } from '../../database/queries/auth/signupquery.js';
import { jwtSign } from '../../helper/jwtSign.js';
import CustomError from '../../helper/CustomError.js';
import signInQuery from '../../database/queries/auth/signinquery.js';

const addUser = (req, res, next) => {
  const { password, email } = req.body;
  let userData;
  SignUpSchema.validateAsync(req.body, { abortEarly: false }).then(() => signInQuery(email)).then((result) => {
    if (result.rowCount) {
      throw new CustomError(400, ["email is already exists!!"])
    } else {
      return bcrybt.hash(password, 7)
    }
  }).then((hashedPassword) => {
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
    .catch((error) => {
      if (error.name === 'ValidationError') {
        const message = error.details.map((i) => i.message);
        next(new CustomError(400, message));
      } else {
        next(new CustomError(400, 'This email is already existed'))
      }
    });
};
export default addUser;
