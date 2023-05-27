const connection = require('../../config/config/connection.js');

exports.addCartItemQuery = (user_id, product_id, amount) => {
    return connection.query('INSERT INTO cart (user_id, product_id, amount) VALUES ($1, $2, $3) RETURNING * ;', [user_id, product_id, amount]);
}
