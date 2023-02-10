import { tmdbAPI } from '../../../infra/config/axios';
import { GetMovieReviews } from './get-movie-reviews';

jest.mock('../../../infra/config/axios.ts');
const mockedAxios = tmdbAPI as jest.Mocked<typeof tmdbAPI>;

describe('GetMovieReviews Use Case', () => {
  it('should return a empty list if movie has no reviews', async () => {
    // Arrange
    const getMovieReviews = new GetMovieReviews();
    const requestParameter = { id: '2' };
    mockedAxios.get.mockResolvedValue({
      data: {
        id: 2,
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: [],
      },
    });
    const expectedResultsSize = 0;

    // Act
    const data = await getMovieReviews.execute(requestParameter);

    // Assert
    expect(data.totalResults).toEqual(0);
    expect(data.results.length).toEqual(expectedResultsSize);
  });

  it("should handle request when movie's id does not exists", async () => {
    // Arrange
    const getMovieReviews = new GetMovieReviews();
    const requestParameter = { id: '1' };
    mockedAxios.get.mockResolvedValue({
      data: [],
    });
    const expectedResultsSize = 0;

    // Act
    const data = await getMovieReviews.execute(requestParameter);

    // Assert
    expect(data.totalResults).toEqual(0);
    expect(data.results.length).toEqual(expectedResultsSize);
  });

  it('should return a list of reviews of a movie', async () => {
    // Arrange
    const getMovieReviews = new GetMovieReviews();
    const requestParameter = { id: '1578' };
    mockedAxios.get.mockResolvedValue({
      data: {
        id: 82856,
        page: 1,
        total_pages: 1,
        total_results: 2,
        results: [
          {
            author: 'Eky',
            author_details: {
              name: '',
              username: 'Eky',
              avatar_path: null,
              rating: null,
            },
            content:
              'This film marked the third reunion between Martin Scorsese and Robert De Niro after “Mean Streets” and “Taxi Driver”!',
            created_at: '2012-06-19T11:32:11.000Z',
            id: '4fe0633b760ee31b7d0013dd',
            updated_at: '2021-06-23T15:58:34.396Z',
            url: 'https://www.themoviedb.org/review/4fe0633b760ee31b7d0013dd',
          },
          {
            author: 'tanty',
            author_details: {
              name: '',
              username: 'tanty',
              avatar_path: '/https://www.gravatar.co…54fe582d4fe1acc26c4e.jpg',
              rating: 10.0,
            },
            content:
              'Impressive Robert De Niro and Joe Pesci in a classical Scorsese movie.',
            created_at: '2014-02-13T11:00:17.298Z',
            id: '52fca5c19251411d236d6a07',
            updated_at: '2021-06-23T15:58:34.396Z',
            url: 'https://www.themoviedb.org/review/52fca5c19251411d236d6a07',
          },
        ],
      },
    });
    const expectedResult = [
      {
        author_details: {
          username: 'Eky',
          avatar_path: null,
        },
        content:
          'This film marked the third reunion between Martin Scorsese and Robert De Niro after “Mean Streets” and “Taxi Driver”!',
        created_at: '2012-06-19T11:32:11.000Z',
        id: '4fe0633b760ee31b7d0013dd',
        url: 'https://www.themoviedb.org/review/4fe0633b760ee31b7d0013dd',
      },
      {
        author_details: {
          username: 'tanty',
          avatar_path: '/https://www.gravatar.co…54fe582d4fe1acc26c4e.jpg',
        },
        content:
          'Impressive Robert De Niro and Joe Pesci in a classical Scorsese movie.',
        created_at: '2014-02-13T11:00:17.298Z',
        id: '52fca5c19251411d236d6a07',
        url: 'https://www.themoviedb.org/review/52fca5c19251411d236d6a07',
      },
    ];

    // Act
    const data = await getMovieReviews.execute(requestParameter);

    // Assert
    expect(data.totalResults).toEqual(2);
    expect(data.results).toEqual(expectedResult);
  });
});
