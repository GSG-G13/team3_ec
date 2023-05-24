import React, { useContext, useEffect, useState } from "react";
import CardList from "../../../components/CardList/CardList";
import { Filter } from "../../../components/filter/Filter";

export const ProductsPage = ({context}) => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(12000);
  const [category, setCategory] = useState("all");
  const searchValue = context || "";

  useEffect(() => {
    fetch(`api/v1/products/?price=${price}&category=${category}&search=${searchValue}`)
      .then((data) => data.json())
      .then((data) => setProducts((prev) => data.data));
  }, [price, category]);

  return (
    <div className="products-container">
      <Filter price={price} setPrice={setPrice} category={category} setCategory={setCategory} />
      <CardList products={products} />
    </div>
  );
};
