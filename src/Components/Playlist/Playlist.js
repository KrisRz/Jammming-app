import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.css';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  return (
    <div className={styles.Playlist}>
      <input 
        id="input2"
        value={playlistName} 
        onChange={(e) => onNameChange(e.target.value)} 
      />
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button id="button2" className={styles.SaveButton} onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
