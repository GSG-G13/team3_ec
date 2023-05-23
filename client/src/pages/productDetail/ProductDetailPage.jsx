import { useParams } from "react-router-dom";
import "./productDetailPage.css";
import { useEffect, useState } from "react";

export const ProductDetailPage = () => {
    const params = useParams();
  const [product, setProduct] = useState({});
  
  

  useEffect(() => {
    fetch(`http://localhost:5174/api/v1/product/${params.id}`)
      .then((data) => data.json())
      .then((data) => setProduct(prev => data.data[0]));
  });
  console.log(product);
  return (
    <div className="container">
      <div className="box">
        <div className="images">
          <div className="img-holder active">
            <img src={product.image_url} />
          </div>
        </div>
        <div className="basic-info">
          <h1>{product.name}</h1>

          <span>${product.price}</span>
          <div className="options">
            <a href="#">Add to Cart</a>
          </div>
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
        </div>
      </div>
    </div>
  );
};
