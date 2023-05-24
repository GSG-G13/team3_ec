import connection from '../../config/config/connection.js';


export default function deleteCart(id) {
    
    const sql = {
        text: 'DELETE FROM cart WHERE  id= $1 RETURNING * ',
        values: [id]
    }
    return connection.query(sql);
}
