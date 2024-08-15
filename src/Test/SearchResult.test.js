import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is imported
import SearchResults from '../Components/SearchResult/SearchResults';

test('renders search results correctly', () => {
  const mockTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'uri1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'uri2' }
  ];

  const { getByText } = render(<SearchResults searchResults={mockTracks} onAdd={() => {}} />);

  act(() => {
    expect(getByText('Song 1')).toBeInTheDocument();
    expect(getByText('Song 2')).toBeInTheDocument();
  });
});
