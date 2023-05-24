import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './cardlist.css'
const CardList = ({ products, searchValue }) => {

    console.log(searchValue, "hhh");
    console.log(products, "kkkkkk");
    const filterdArray = products.filter(product => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return (<div className="product-container">
        <div className="product-list">
            {

                products.length && filterdArray.map(product => <Card product={product} key={product.id} />)
            }

        </div>
    </div>)
}
export default CardList