import { tmdbAPI } from '../../../infra/config/axios';
import { GetMovieRecommendations } from './get-movie-recommendations';
import { getMovieRecommendationsMock } from './mock/get-movie-recommendations';

jest.mock('../../../infra/config/axios.ts');
const mockedAxios = tmdbAPI as jest.Mocked<typeof tmdbAPI>;

describe('GetMovieRecomenndations Use Case', () => {
  it('should return a list of recommendations of a movie', async () => {
    // Arrange
    const getMovieRecommendations = new GetMovieRecommendations();
    const requestParameter = { id: '1578' };
    mockedAxios.get.mockResolvedValue({
      data: getMovieRecommendationsMock,
    });
    const expectResult = [
      {
        id: 524,
        title: 'Casino',
        poster_path: '/4TS5O1IP42bY2BvgMxL156EENy.jpg',
        release_date: '1995-11-22',
        vote_average: 8.013,
      },
      {
        id: 103,
        title: 'Taxi Driver',
        poster_path: '/ekstpH614fwDX8DUln1a2Opz0N8.jpg',
        release_date: '1976-02-09',
        vote_average: 8.168,
      },
    ];
    // Act
    const { results } = await getMovieRecommendations.execute(requestParameter);

    // Assert
    expect(results.length).toBeGreaterThan(1);
    expect(results).toEqual(expectResult);
  });
});
