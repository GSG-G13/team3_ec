import Card from '../Card/Card'
import './cardlist.css'
const CardList = () => {
    return (<div className="product-container">
        <h1 className="product-header py-4">OUR PLANTS</h1>
        <div className="product-list">
            <Card />
            <Card />
            <Card />

        </div>
        <button className='show-more'>VIEW MORE<i class="fa-sharp fa-solid fa-arrow-right"></i></button>
    </div>)
}
export default CardList