import { tmdbAPI } from '../../../infra/config/axios';
import { GetOfficialVideos } from './get-official-videos';

jest.mock('../../../infra/config/axios.ts');
const mockedAxios = tmdbAPI as jest.Mocked<typeof tmdbAPI>;

describe('GetOfficialVideos Use Case', () => {
  it('should return a list of data with official field as true', async () => {
    // Arrange
    const getOfficialVideos = new GetOfficialVideos();
    const requestParameter = { id: '1578' };
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'RAGING BULL (1980) | Hit Me in the Face | MGM',
            key: 'MSspmsYAOq0',
            site: 'YouTube',
            size: 1080,
            type: 'Clip',
            official: false,
            published_at: '2022-05-17T23:00:12.000Z',
            id: '6287bc48f10a1a33aaad519a',
          },
          {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'Official Trailer',
            key: 'F2UKuKxCJqc',
            site: 'YouTube',
            size: 1080,
            type: 'Trailer',
            official: true,
            published_at: '2022-05-14T23:00:09.000Z',
            id: '6287bc1c0859b451c8e8dd2c',
          },
          {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'Robert De Niro Wins Best Actor: 53rd Oscars (1981)',
            key: 'sH5c-WeE07c',
            site: 'YouTube',
            size: 480,
            type: 'Featurette',
            official: false,
            published_at: '2008-10-03T00:36:48.000Z',
            id: '63d2d0434a52f80085be11f2',
          },
        ],
      },
    });
    const expectedResult = [
      {
        url: 'https://www.youtube.com/watch?v=F2UKuKxCJqc',
        published_at: '2022-05-14T23:00:09.000Z',
      },
    ];

    // Act
    const { videos } = await getOfficialVideos.execute(requestParameter);

    // Assert
    expect(videos.length).toBeGreaterThan(0);
    expect(videos).toEqual(expectedResult);
  });

  it('should return a empty list if does not exists any official video', async () => {
    // Arrange
    const getOfficialVideos = new GetOfficialVideos();
    const requestParameter = { id: '1578' };
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'RAGING BULL (1980) | Hit Me in the Face | MGM',
            key: 'MSspmsYAOq0',
            site: 'YouTube',
            size: 1080,
            type: 'Clip',
            official: false,
            published_at: '2022-05-17T23:00:12.000Z',
            id: '6287bc48f10a1a33aaad519a',
          },
          {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'Official Trailer',
            key: 'F2UKuKxCJqc',
            site: 'YouTube',
            size: 1080,
            type: 'Trailer',
            official: false,
            published_at: '2022-05-14T23:00:09.000Z',
            id: '6287bc1c0859b451c8e8dd2c',
          },
          {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'Robert De Niro Wins Best Actor: 53rd Oscars (1981)',
            key: 'sH5c-WeE07c',
            site: 'YouTube',
            size: 480,
            type: 'Featurette',
            official: false,
            published_at: '2008-10-03T00:36:48.000Z',
            id: '63d2d0434a52f80085be11f2',
          },
        ],
      },
    });
    const expectedResult: {
      url: string;
      published_at: string;
    }[] = [];

    // Act
    const { videos } = await getOfficialVideos.execute(requestParameter);

    // Assert
    expect(videos.length).toEqual(0);
    expect(videos).toEqual(expectedResult);
  });
});
