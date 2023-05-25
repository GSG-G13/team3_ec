import { useEffect, useState } from "react";
import './CartPage.css'
import CartCard from "../../components/Card/Cart/Cart";

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("api/v1/cart")
      .then((data) => data.json())
      .then((data) => {
        setCartProducts(data.data);
      });
  }, []);
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartProducts.length && cartProducts.map((product) => (
        <CartCard cartProducts={product} />
      ))}
    </div>
  );
};
