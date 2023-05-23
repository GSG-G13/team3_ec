import './filter.css'
import { TextButton } from "../components/buttons/TextButton";
import { RangeInput } from "../components/inputs/RangeInput";
import { RadioInput } from "../components/inputs/RadioInput";
import { useState } from 'react';


export const Filter = ({ products, setProducts }) => {
 const [min,setMin] = useState(300);
  return (
    <div className='filter-page'>
      <header className='filter-header'>
        <h3 className='filter-h3'>Filter</h3>
        <TextButton name="Clear" />
      </header>

      <h3 className='filter-h3'>Price</h3>
      <RangeInput min={300} max={1200} />


      <h3 className='filter-h3'>Category</h3>
      <RadioInput label="Indoor" />
      <RadioInput label="Air Purifier" />
      <RadioInput label="Low Maintenance" />
    </div>

  );
};
