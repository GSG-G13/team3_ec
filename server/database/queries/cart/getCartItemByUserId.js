import connection from "../../config/config/connection.js";


export default function getCartItemByUserId({ id }) {
    
    return connection.query(
        'SELECT * FROM cart WHERE user_id = $1', [id]
    )
}