import './search.css'


const Search = ({ setSearchValue }) => {
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className="pseudo-search">
            <input type="search" placeholder="Search..." autoFocus required onChange={handleChange} />
            <button className="fa fa-search" type="submit" ></button>
        </div>)

}

export default Search;