import connection from '../../config/config/connection.js';


export default function deleteCart(product_id) {
    
    const sql = {
        text: 'DELETE FROM cart WHERE  product_id= $1 RETURNING * ',
        values: [product_id]
    }
    return connection.query(sql);
}
