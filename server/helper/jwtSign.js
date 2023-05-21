import { } from 'dotenv/config';
import jwt from 'jsonwebtoken';

export const jwtSign = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});

export const jwtVerify = (payload) => new Promise((resolve, reject) => {
  jwt.verify(payload, process.env.SECRET_KEY, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});
