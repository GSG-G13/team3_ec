import { Filter } from "./Filter"
import { useEffect, useState } from 'react'
import CardList from "../components/CardList/CardList"
import { useOutletContext } from "react-router-dom";

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const searchValue = useOutletContext();
    console.log(searchValue, "product");
    useEffect(() => {
        fetch('api/v1/products')
            .then(data => data.json())
            .then(data => setProducts(prev => data.data));
    }, []);
    const handleChange = (products) => {
        setProducts(products)
    }
    return (
        <div className="products-container">
            <Filter setProducts={handleChange} products={products} />
            <CardList products={products} searchValue={searchValue} />
        </div>
    )
}