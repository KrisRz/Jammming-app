import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this is installed to use `toBeInTheDocument`
import App from '../Components/App/App';
import Spotify from '../Util/Spotify';

jest.mock('../Util/Spotify');

describe('App Component', () => {
  beforeEach(() => {
    Spotify.search.mockResolvedValue([
      {
        id: '1',
        name: 'test song',
        artist: 'test artist',
        album: 'test album',
        uri: 'test-uri',
      },
    ]);
  });

  test('renders the app and performs basic operations', async () => {
    await act(async () => {
      render(<App />);
    });

    // Check if the app title is rendered
    expect(screen.getByText('Jammming')).toBeInTheDocument();

    // Simulate a search
    const searchInput = screen.getByPlaceholderText('Enter A Song, Album, or Artist');
    fireEvent.change(searchInput, { target: { value: 'test song' } });
    fireEvent.click(screen.getByText('SEARCH'));

    // Wait for results to load
    await act(async () => {});

    // Simulate adding a track
    const addTrackButton = screen.getAllByText('+')[0];
    fireEvent.click(addTrackButton);

    // Verify the track is added to the playlist
    const removeTrackButton = screen.getAllByText('-')[0];
    expect(removeTrackButton).toBeInTheDocument();
  });
});
