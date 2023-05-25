
import { useOutletContext } from "react-router-dom";
import Card from '../Card/Card'
import { TextButton } from "../buttons/TextButton";
import './cardlist.css'
import { useEffect, useState } from "react";
const CardList = ({ price, category,search, products, setPage }) => {
    const [count, setCount] = useState()

    

    useEffect(()=>{
        fetch(`api/v1/count/?price=${price}&category=${category}&search=${search}`)
        .then(data => data.json())
        .then(data => setCount(parseInt(data.count)))

    },[price, category, search])
    
    const pagesList =[]

    for(let i = 1; i <= Math.ceil(count / 5); i++){
        pagesList.push(i)
    }

    return (<div className="product-container">
        <div className="product-list">
            {

                products.length && products.map(product => <Card product={product} key={product.id} />)
            }

        </div>
        <div className="pages-container">
            {
                pagesList.map(page => <TextButton name={page} onClick={()=> {setPage(page)}}/> ) 
            }
        </div>
    </div>)
}
export default CardList