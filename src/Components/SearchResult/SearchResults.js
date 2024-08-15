import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.css'; // Ensure the correct path and file name

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
