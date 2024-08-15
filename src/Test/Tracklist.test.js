import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Tracklist from '../Components/Tracklist/Tracklist';

test('renders tracks and handles add/remove', () => {
  const mockTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'uri2' }
  ];
  const onAdd = jest.fn();
  const onRemove = jest.fn();

  const { getAllByText } = render(
    <Tracklist 
      tracks={mockTracks} 
      onAdd={onAdd} 
      onRemove={onRemove} 
      isRemoval={false} 
    />
  );

  const addButtons = getAllByText('+');
  act(() => {
    fireEvent.click(addButtons[0]); // Click the first + button
  });
  expect(onAdd).toHaveBeenCalledWith(mockTracks[0]);

  act(() => {
    fireEvent.click(addButtons[1]); // Click the second + button
  });
  expect(onAdd).toHaveBeenCalledWith(mockTracks[1]);
});
