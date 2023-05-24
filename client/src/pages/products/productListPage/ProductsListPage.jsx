import { Filter } from "../../../components/filter/Filter";
import { useEffect, useState } from "react";
import CardList from "../../../components/CardList/CardList";


export const ProductsPage = ({search}) => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(12000)
  const [category, setCategory]= useState('all')

console.log(search,'****/*');

  useEffect(() => {
    fetch(`api/v1/products/?price=${price}&category=${category}&search=${search}`)
      .then((data) => data.json())
      .then((data) => setProducts((prev) => data.data));
  }, []);

 
  return (
    <div className="products-container">
      <Filter price={price} setPrice={setPrice} category={category} setCategory={setCategory} />
      <CardList products={products} />
     
    </div>
  );
};
