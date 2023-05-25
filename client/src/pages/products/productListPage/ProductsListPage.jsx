import React, { useContext, useEffect, useState } from "react";
import CardList from "../../../components/CardList/CardList";
import { Filter } from "../../../components/filter/Filter";
import { SearchContext } from "../../../layout/HomeLayout"


export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(12000);
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1)
  const searchValue = useContext(SearchContext);



  useEffect(() => {
    fetch(`api/v1/products/?page=${page}&price=${price}&category=${category}&search=${searchValue}`)
      .then((data) => data.json())
      .then((data) => {
        setProducts((prev) => data.data)
       
        
      });
  }, [price, category, page,searchValue]);

  return (
    <div className="products-container">
      <Filter price={price} setPrice={setPrice} category={category} setCategory={setCategory} />
      <CardList products={products} setPage={setPage}  price={price} category={category} search={searchValue}  />
      
    </div>
  );
};
