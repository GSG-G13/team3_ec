import './input.css'

export const RadioInput = ({label}) => {
    return (
        <label className="list-item" >
        <input type="radio" name="redioBtn" className='radio' />
        {label}
        </label>
    )
}