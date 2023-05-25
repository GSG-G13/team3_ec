import connection from '../../config/config/connection.js';

export const getUserQuery = () => {
  
    return connection.query(
        'select username,image_url from users'
    );
};
