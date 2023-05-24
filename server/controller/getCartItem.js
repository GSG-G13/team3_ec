import getCartItemByUserId from '../database/queries/cart/getCartItemByUserId.js';
import CustomError from '../helper/CustomError.js'

export const getCartItem = (req, res, next) => {
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
