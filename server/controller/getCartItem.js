const { getCartItemByUserId } = require('../database/queries/cart/getCartItemByUserId.js');
const CustomError = require('../helper/CustomError.js')

exports.getCartItem = (req, res, next) => {
  if(!req.userData){
    next(new CustomError(401, 'You need to login'))
  }
  getCartItemByUserId(req.userData.id)
    .then((data) => res.json({
      error: false,
      message: 'Fetch data successfully',
      data: data.rows,
    })).catch(error => next(new CustomError(401, 'You need to login')));
};
