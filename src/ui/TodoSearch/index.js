import React from 'react';

import './TodoSearch.css';
function TodoSearch({searchValue, setSearchValue, loading}) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <div className='search-container'>
        <input
        className="TodoSearch"
        placeholder='Busqueda'
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
        <span className='search-icon'>
        </span>

        </div>
    );
}

export {TodoSearch};