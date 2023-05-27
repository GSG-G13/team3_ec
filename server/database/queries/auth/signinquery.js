const connection = require('../../config/config/connection.js');

const signInQuery = (email) => {
  const option = {
    text: 'select * from users where email=$1',
    values: [email],
  };
  return connection.query(option);
};

module.exports = signInQuery;
