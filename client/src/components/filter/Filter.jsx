import "./filter.css";
import { TextButton } from "../buttons/TextButton";
import { RangeInput } from "../inputs/RangeInput";
import { RadioInput } from "../inputs/RadioInput";
import { useState } from "react";

export const Filter = ({ price, setPrice, category, setCategory ,setPage}) => {

  const handleRadio = (e)=> {
    setCategory(e.target.value)
  }



  return (
    <div className="filter-page">
      <div className="filter-container">
        <header className="filter-header">
          <h3 className="filter-h3">Filter</h3>
          <TextButton name="Clear" onClick={()=>{
            setCategory('all')
            setPrice(12000)
          }}/>
        </header>

        <h3 className="filter-h3">Price</h3>
        <RangeInput min={300} max={12000} price={price} onChange={(e) => {
          setPage(1);
          setPrice(e.target.value)
        }} />

        <h3 className="filter-h3">Category</h3>
        <RadioInput label='all' onChange={(e) => {
          setPage(1)
          handleRadio(e)
        }} value='all' category={category} />
        <RadioInput label="indoor plants"
          onChange={(e) => {
          setPage(1)
          handleRadio(e)
        }} value='indoor plants' category={category}/>
        <RadioInput label="flowering plants"
          onChange={(e) => {
          setPage(1)
          handleRadio(e)
        }} value='flowering plants' category={category}/>
        
      </div>
    </div>
  );
};