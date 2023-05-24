
import './input.css'

export const RangeInput = ({ min, max, defaultValue, onChange }) => {
    return (
        <div>
            <div className="price-range">
                <span>{min}</span>
                <span>{max}</span>
            </div>
            <input type="range" className="range-input" min={min} max={max} defaultValue={defaultValue} step={100} onChange={onChange}/>
        </div>
    )
}