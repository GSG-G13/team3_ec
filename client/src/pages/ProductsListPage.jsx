import { Filter } from "./Filter"
import { useEffect, useState } from 'react'
import CardList from "../components/CardList/CardList"

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('api/v1/products')
            .then(data => data.json())
            .then(data => setProducts(prev => data.data));
    }, []);
    const handleChange =(products)=>{
        setProducts(products)
    }
    return (
        <div className="products-container">
            <Filter setProducts={handleChange} products={products}/>
            <CardList products={products}/>
        </div>
    )
}