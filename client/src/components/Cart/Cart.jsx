import './cart.css'

const CartCard = ({ cartProducts }) => {
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
                <button className="btn-close py-2" id="close-btn-alert">
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