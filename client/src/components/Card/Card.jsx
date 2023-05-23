import "./card.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ product }) => {
  const notify = () => toast("Item added to cart successfully");
 
  const handlerpostData = () => {
    fetch(`api/v1/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
      ,
      body: JSON.stringify({
        product_id: product.id,
        amount: "5"

      })
    }).then((data) => data.json())
      .then((data) => {
        if (!data.error) {
        notify();
      }
    })
  }
  

  return (
    
      <div className="card-vertical">
      <div className="card-image-container">
        <Link to={`${product.id}`}>
          <img
            className="responsive-img"
            src={product.image_url}
            alt="product"
          />
        </Link>
         
        </div>
        <div className="card-content-container">
          <div className="card-title">{product.name}</div>
          <div className="card-text"> {product.description}</div>
          <h3 className="product-price mx-2">${product.price} </h3>

        <button className="bttn bttn-primary" onClick={handlerpostData} >
            <span className="bttn-icon" >
              ADD TO CART
              <i className="fas fa-shopping-bag"></i>
          </span>
          
          </button>
        </div>
      </div>
 
  );
};
export default Card;
