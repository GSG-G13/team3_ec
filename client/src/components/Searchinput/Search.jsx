import './search.css'
 import { useState } from 'react';
const Search = () => {

    const [valueI, setInput] = useState('');
    return (
        <div className="pseudo-search">
            <input type="text" placeholder="Search..." onChange={(e) => setInput(e.target.value)} autofocus required />
            <button className="fa fa-search" type="submit"></button>
        </div>)

}

export default Search;