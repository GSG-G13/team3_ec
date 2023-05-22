import { jwtVerify } from '../helper/jwtSign.js';
import CustomError from '../helper/CustomError.js';

export default function authChecker (req, res, next) {
    
  const  token  = req.cookies.token;

  if (!token) {
    req.userDate = undefined;
    next();
    return;
  }

  jwtVerify(token)
    .then((decodedToken) => {
      req.userData = decodedToken;
      next();
    }).catch((error) => {
      next(new CustomError(401, 'Invalid Token'));
    });
};
