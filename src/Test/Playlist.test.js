import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is imported
import Playlist from '../Components/Playlist/Playlist';

test('renders playlist and handles track removal', () => {
  const mockTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' },
  ];
  const onRemove = jest.fn();

  const { getByText } = render(
    <Playlist 
      playlistName="My Playlist" 
      playlistTracks={mockTracks} 
      onRemove={onRemove} 
      onNameChange={() => {}} 
      onSave={() => {}} 
    />
  );

  act(() => {
    expect(getByText('Song 1')).toBeInTheDocument();
  });

  act(() => {
    fireEvent.click(getByText('-'));
  });
  expect(onRemove).toHaveBeenCalledWith(mockTracks[0]);
});
