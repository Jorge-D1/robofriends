import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div style = {{padding:'.5rem'}}>
      <input
        className='searchInput'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;