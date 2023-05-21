import { } from 'dotenv/config';
import bcrypt from 'bcrypt';
import signInQuery from '../../database/queries/auth/signinquery.js';
import { jwtSign } from '../../helper/jwtSign.js';
import CustomError from '../../helper/CustomError.js';
import { LoginSchema } from '../../validation/login.js';

const signinController = (req, res, next) => {
    const { email, password } = req.body;
    LoginSchema.validateAsync({ email, password }, { abortEarly: false })
        .then(() => signInQuery(email))
        .then((data) => {
            if (data.rowCount === 0) {
                next(new CustomError(400, 'this email is not exists'));
            } else {
                req.user = data.rows[0];
                return bcrypt.compare(password, data.rows[0].password);
            }
        })
        .then((isMatch) => {
            if (isMatch) {
                return jwtSign({ id: req.user.id, name: req.user.name }, process.env.SECRET_KEY);
            }
            next(new CustomError(400, 'Invalid password'));
        })
        .then((token) => {
            res.cookie('token', token, { httpOnly: true, secure: true }).json({
                status: 200,
                message: 'Sign In successfully ',
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

export default signinController;
