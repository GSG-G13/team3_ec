
import './input.css'

export const RangeInput = ({min, max}) => {
    return (
        <div>
            <div className="price-range">
                <span>{min}</span>
                <span>{max}</span>
            </div>
            <input type="range" className="range-input" min={min} max={max} defaultValue={max} step={10}/>
        </div>
    )
}