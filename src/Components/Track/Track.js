import React from 'react';
import styles from './Track.css';

function Track({ track, onAdd, onRemove, isRemoval }) {
  const renderAction = () => {
    if (isRemoval) {
      return <button className={styles.TrackAction} onClick={() => onRemove(track)}>-</button>;
    }
    return <button className={styles.TrackAction} onClick={() => onAdd(track)}>+</button>;
  };

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
