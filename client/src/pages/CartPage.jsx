import { useEffect, useState } from "react";
import CartCard from "../components/Cart/Cart";

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("api/v1/cart")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCartProducts(data.data);
      });
  }, []);
  console.log(cartProducts);
  return (
    <div className="card-page">
      {cartProducts.map((product) => (
        <CartCard cartProducts={product} />
      ))}
    </div>
  );
};
