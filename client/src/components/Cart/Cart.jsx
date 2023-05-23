import './cart.css'
import { useNavigate } from "react-router-dom";

const CartCard = ({ cartProducts }) => {
    const useNavig = useNavigate();
   
    const handlerDeleteCart = () => {
        
        fetch(`api/v1/cart/${cartProducts.id}`, {
            method: "DELETE",
        }).then((data) => data.json())
        .then((data)=>console.log(data))
        useNavig('/cart')
    }
    return (
        <div className="card-horizontal cart-item" >
            <div className="card-image">
                <img
                    className="responsive-img"
                    src={cartProducts.image_url}
                    alt=""
                />
            </div>
            <div className="card-horizontal-content-container">
                <button className="btn-close py-2" id="close-btn-alert" onClick={handlerDeleteCart}>
                    <i className="fas fa-times" aria-hidden="true"></i>
                </button>
                <div className="text-conatiner">
                    <h2 className="card-title">{cartProducts.name}</h2>
                    <p className="card-text">{cartProducts.description}</p>
                    <h5 className="card-price">
                        {cartProducts.price}
                    </h5>
                    <div className="button-container  items-center">  <button className="bttn  icon-btn">
                        <i className='fas fa-minus'></i>
                    </button>
                        <div className="">{cartProducts.amount}</div>
                        <button className="bttn  icon-btn">
                            <i className='fas fa-plus'></i>
                        </button></div>

                </div>
            </div>

        </div>
    )
}
export default CartCard