import React, { useState } from 'react';
import styles from './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.SearchBar}>
      <input 
        id="input1" 
        placeholder="Enter A Song, Album, or Artist" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button id="button1" className={styles.SearchButton} onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
