import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './cardlist.css'
const CardList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('api/v1/products')
        .then(data => data.json())
        .then(data => setProducts(prev => data.data));
    }, []);
    

    return (<div className="product-container">
        <h1 className="product-header py-4">OUR PLANTS</h1>
        <div className="product-list">
            {
               products.length && products.map(product => <Card product={product}/>)
            }

        </div>
        <button className='show-more'>VIEW MORE<i class="fa-sharp fa-solid fa-arrow-right"></i></button>
    </div>)
}
export default CardList