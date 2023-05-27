// import addCartItemQuery from "../database/queries/cart/addCartItem.js";
// import CustomError from '../helper/CustomError.js'

const { addCartItemQuery } = require("../database/queries/cart/addCartItem.js")
const CustomError = require('../helper/CustomError.js')

exports.addCartItem = (req, res, next) => {
    if (!req.userData) {
        next(new CustomError(401, 'You need to login'))
    }
    const user_id = req.userData.id;
    const { product_id, amount } = req.body
    addCartItemQuery(user_id, product_id, amount)
        .then(data => res.json({
            error: false,
            message: 'Item added to cart successfully',
            data: data.rows
        })).catch(error => next(new CustomError(401, 'You need to login')))
}