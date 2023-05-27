const connection = require("../../config/config/connection.js");


exports.getCartItemByUserId = (id) => {
    return connection.query(
        'SELECT cart.id as cart_id, products.id,products.price, products.name, products.image_url, products.description, products.category, products.in_stock, cart.user_id, cart.amount FROM products JOIN cart ON products.id = cart.product_id WHERE cart.user_id = $1', [id]
    )
}