import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './cardlist.css'
const CardList = ({ products }) => {

    console.log(products);

    return (<div className="product-container">
        <div className="product-list">
            {
                products.length && products.map(product => <Card product={product} key={product.id} />)
            }

        </div>
    </div>)
}
export default CardList