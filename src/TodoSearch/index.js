import React from 'react';
// import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    // const {searchValue, setSearchValue} = React.useContext(TodoContext); 
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <input
        className="TodoSearch"
        placeholder='Cereza'
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};