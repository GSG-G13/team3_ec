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

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INT ,
  name VARCHAR(255),
  price INT,
  category VARCHAR(40),
  description TEXT,
  image_url TEXT,
  in_stock INT,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INT,
  product_id INT,
  amount INT,
  created_at TIMESTAMP DEFAULT now(),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO users (username,password,email,image_url,type) VALUES('admin','$2b$07$NcDas0M/6aSZbdTzsbK0quCE8N0uHkAxHCotnDY3Vpma7k2wbsnxa','admin1@gmail.com','https://th.bing.com/th/id/R.7f70ccdaea42a3ea7f34f470040c1b29?rik=XpAJhC2Net1BXg&pid=ImgRaw&r=0','admin');
COMMIT;
