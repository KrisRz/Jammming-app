import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is imported
import Track from '../Components/Track/Track';

test('renders track and handles action', () => {
  const mockTrack = { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' };
  const onAdd = jest.fn();
  const onRemove = jest.fn();

  const { getByText, rerender } = render(
    <Track 
      track={mockTrack} 
      onAdd={onAdd} 
      onRemove={onRemove} 
      isRemoval={false} 
    />
  );

  act(() => {
    expect(getByText('Song 1')).toBeInTheDocument();
    fireEvent.click(getByText('+'));
    expect(onAdd).toHaveBeenCalledWith(mockTrack);
  });

  rerender(
    <Track 
      track={mockTrack} 
      onAdd={onAdd} 
      onRemove={onRemove} 
      isRemoval={true} 
    />
  );

  act(() => {
    fireEvent.click(getByText('-'));
    expect(onRemove).toHaveBeenCalledWith(mockTrack);
  });
});
