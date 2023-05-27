const { jwtVerify } = require('../helper/jwtSign.js');
const CustomError = require('../helper/CustomError.js');


const authChecker = (req, res, next) => {
  const token = req.cookies.token;
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

module.exports = authChecker