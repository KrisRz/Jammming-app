import Spotify from '../Util/Spotify';

describe('Spotify API', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            tracks: {
              items: [
                {
                  id: '1',
                  name: 'test song',
                  artists: [{ name: 'test artist' }],
                  album: { name: 'test album' },
                  uri: 'test-uri',
                },
              ],
            },
          }),
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('search calls Spotify API and returns tracks', async () => {
    const mockTracks = [
      {
        id: '1',
        name: 'test song',
        artist: 'test artist',
        album: 'test album',
        uri: 'test-uri',
      },
    ];

    const tracks = await Spotify.search('test search');
    expect(tracks).toEqual(mockTracks);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('https://api.spotify.com/v1/search'), expect.any(Object));
  });
});
