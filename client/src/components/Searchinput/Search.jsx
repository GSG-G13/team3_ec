import './search.css'
const Search = () => {
    return (
        <div className="pseudo-search">
            <input type="text" placeholder="Search..." autofocus required />
            <button className="fa fa-search" type="submit" ></button>
        </div>)

}
export default Search;