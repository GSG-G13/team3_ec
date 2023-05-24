import { useParams, Link, useNavigate } from "react-router-dom";
import "./productDetailPage.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1)
  const navigateTo = useNavigate();

  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/${params.id}`)
      .then((data) => data.json())
      .then((data) => setProduct((prev) => data.data[0]));
  }, []);

  const addToCart = () => {
    fetch("/api/v1/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product_id: params.id,
        amount: amount,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data.error) {
         return toast.promise(resolveAfter3Sec, {
          pending: `Adding ${product.name} to Cart`,
          success: "Item added to Cart Successfully",
          error: "Promise rejected 🤯",
        })
          
        }
      })
      .then(()=> navigateTo("/cart"));
  };

  return (
    <div className="box">
      <div className="images">
        <div className="img-holder active">
          <img src={product.image_url} />
        </div>
      </div>
      <div className="basic-info">
        <h1>{product.name}</h1>

        <span>${product.price * amount}</span>
        <div className="amount-counter">
          <button onClick={()=> setAmount(prev =>  Math.max(prev - 1, 1))}>-</button>
          <h3>{amount}</h3>
          <button onClick={()=> setAmount(prev => prev+1)}>+</button>
        </div>
        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      <div className="description">
        <p>{product.description}</p>

        <ul className="social">
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" 
        />
      </div>
    </div>
  );
};
