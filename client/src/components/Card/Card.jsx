import './card.css'
const Card = () => {
    return <div className="card-vertical">
        <div className="card-image-container">
            <img
                className="responsive-img"
                src="http://localhost:3001/static/media/CalatheaFreddie.ca226a03.jfif"
                alt="product"
            />
        </div>
        <div className="card-content-container">
            <div className="card-title" >hhh</div>
            <div className="card-text"> gggg</div>
            <h3 className="product-price mx-2">400 </h3>

            <button
                className="bttn bttn-primary">
                <span className="bttn-icon">
                    ADD TO CART
                    <i className="fas fa-shopping-bag"></i>
                </span>
            </button>
        </div>
    </div>
}
export default Card
