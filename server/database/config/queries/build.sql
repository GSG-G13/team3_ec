BEGIN;

DROP TABLE IF EXISTS cart, products CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(55) NOT NULL,
    image_url TEXT
);



CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price INT,
  category VARCHAR(40),
   description TEXT,
  image_url TEXT,
  in_stack INT,
 
);
CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INT,
  product_id INT,
  amount INT,
  created_at DATE,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE
);
COMMIT;
