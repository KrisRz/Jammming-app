import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.css';

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className={styles.Tracklist}>
      {tracks.map(track => (
        <Track 
          key={track.id} 
          track={track} 
          onAdd={onAdd} 
          onRemove={onRemove} 
          isRemoval={isRemoval} 
        />
      ))}
    </div>
  );
}

export default Tracklist;
