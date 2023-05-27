import './cart.css'
import { useNavigate } from "react-router-dom";

const CartCard = ({ cartProducts, setCartProducts }) => {
    const useNavig = useNavigate();


    const handlerDeleteCart = () => {

        fetch(`api/v1/cart/${cartProducts.cart_id}`, {
            method: "DELETE",
        }).then((data) => data.json())
            .then(data => {
                if (!data.error) {
                    setCartProducts((prev) => prev.filter(products => products.id != cartProducts.id))
                }
            })

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
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
                <div className="text-conatiner">
                    <h2 className="card-title">{cartProducts.name}</h2>
                    <p className="card-text">{cartProducts.description}</p>
                    <h5 className="card-price">
                        Price: ${cartProducts.price * cartProducts.amount}
                    </h5>
                    <div className="button-container  items-center">
                        <div className="">Quantity: {cartProducts.amount}</div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default CartCard