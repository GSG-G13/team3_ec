import "./card.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ product }) => {
  const notify = () => toast("Item added to cart successfully");
  const navigate = useNavigate()

  const handlerpostData = () => {
    fetch(`api/v1/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product.id,
        amount: "5",
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data.error) {
          notify();
          
        }
      });
  };

  return (
    <Link to={`${product.id}`}>
    <div className="card-vertical">
      <div className="card-image-container">
        
          <img
            className="responsive-img"
            src={product.image_url}
            alt="product"
          />
        
      </div>
      <div className="card-content-container">
        <div className="card-title">{product.name}</div>
        <div className="card-text"> {product.description}</div>
        <h3 className="product-price mx-2">${product.price} </h3>

        <button className="bttn bttn-primary" >
          <span className="bttn-icon">
            ADD TO CART
            <i className="fas fa-shopping-bag"></i>
          </span>
        </button>
       
      </div>
    </div>
    </Link>
  );
};
export default Card;
