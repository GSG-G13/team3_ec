const connection = require('../../config/config/connection.js');

exports.getUserQuery = () => {
  
    return connection.query(
        'select username,image_url from users'
    );
};
