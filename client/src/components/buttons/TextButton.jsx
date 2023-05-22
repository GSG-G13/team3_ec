import './button.css'

export const TextButton = ({name, onClick})=> {

    return(
        <button className="text-button" onClick={onClick}>{name}</button>
    )
}