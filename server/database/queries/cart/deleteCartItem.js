const connection = require('../../config/config/connection.js');


exports.deleteCart = (id) => {

    const sql = {
        text: 'DELETE FROM cart WHERE  id= $1 RETURNING * ',
        values: [id]
    }
    return connection.query(sql);
}
