import "./card.css";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
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

          <button className="bttn bttn-primary">
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
