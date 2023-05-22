import './filter.css'
import { TextButton } from "../components/buttons/TextButton";
import { RangeInput } from "../components/inputs/RangeInput";
import { RadioInput } from "../components/inputs/RadioInput";


export const Filter = () => {
  return (
    <div className='filter-page'>
      <header className='filter-header'>
        <h3 className='filter-h3'>Filter</h3>
        <TextButton name="Clear" onClick={() => {}} />
      </header>

      <h3 className='filter-h3'>Price</h3>
      <RangeInput min={300} max={1200} />


      <h3 className='filter-h3'>Category</h3>
      <RadioInput label="Indoor"/>
      <RadioInput label="Air Purifier"/>
      <RadioInput label="Low Maintenance"/>
      </div>
   
  );
};
