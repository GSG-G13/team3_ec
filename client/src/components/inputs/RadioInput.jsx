import './input.css'

export const RadioInput = ({label, onChange, value, category}) => {
    return (
        <label className="list-item" >
        <input type="radio" name="redioBtn" className='radio' onChange={onChange} value={value} checked={value === category} />
        {label}
        </label>
    )
}