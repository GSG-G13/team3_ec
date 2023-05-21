import connection from '../config/config/connection.js';

export const addUserQuery = (userData) => {
  const {
    username, email, password, type, image_url,
  } = userData;
  return connection.query(
    'INSERT INTO users (username, email, password, type, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, email, type, image_url',
    [username, email, password, type, image_url],
  );
};
