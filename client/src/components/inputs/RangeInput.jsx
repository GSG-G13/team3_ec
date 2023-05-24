
import './input.css'

export const RangeInput = ({ min, max, onChange, price}) => {
    return (
        <div>
            <div className="price-range">
                <span>{min}</span>
                <span>{price}</span>
                <span>{max}</span>
            </div>
            <input type="range" className="range-input" min={min} max={max} defaultValue={max}  value={price} step={100} onChange={onChange}/>
        </div>
    )
}