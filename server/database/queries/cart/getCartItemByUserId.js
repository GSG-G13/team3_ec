import connection from "../../config/config/connection.js";


export default function getCartItemByUserId({ id }) {

    return connection.query(
        'SELECT products.id, products.name, products.image_url, products.description, products.category, products.in_stock, cart.user_id, cart.amount FROM products JOIN cart ON products.id = cart.product_id WHERE cart.user_id = $1', [id]
    )
}