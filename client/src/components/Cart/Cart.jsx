import './cart.css'

const Cart = () => {
    return (
        <div className="card-horizontal cart-item" >
            <div className="card-image">
                <img
                    className="responsive-img"
                    src="https://th.bing.com/th/id/OIP.MBlOJPg-beF5E6q2yR5k9gAAAA?pid=ImgDet&rs=1"
                    alt=""
                />
            </div>
            <div className="card-horizontal-content-container">
                <button className="btn-close py-2" id="close-btn-alert">
                    <i className="fas fa-times" aria-hidden="true"></i>
                </button>
                <div className="text-conatiner">
                    <h2 className="card-title">plant name</h2>
                    <p className="card-text">333</p>
                    <h5 className="card-price">
                        333
                    </h5>
                    <div className="button-container my-2 items-center">  <button className="bttn text-sm icon-btn">
                        <i className='fas fa-minus'></i>
                    </button>
                        <div className="">5</div>
                        <button className="bttn text-sm icon-btn">
                            <i className='fas fa-plus'></i>
                        </button></div>

                </div>
            </div>

        </div>
    )
}
export default Cart