import React from 'react';
import './searchInput.scss';

function SearchInput(props) {
    const { handleNameSearch, searchTerm, setSearchTerm } = props;
    console.log('props:', props)

    const getNameValue = (e) => {
        console.log("got here>>", e.target.value);
        handleNameSearch(e.target.value);
        setSearchTerm(e.target.value);
    }
    
    return(
        <div>
             <input
                className="Search" 
                placeholder="Search by brand or sku #" 
                type="text" 
                value={searchTerm} 
                onChange={getNameValue}/>
        </div>
    )
}

export default SearchInput;