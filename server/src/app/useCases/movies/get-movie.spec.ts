import { tmdbAPI } from '../../../infra/config/axios';
import { Movie } from '../../entities/Movie';
import Reception from '../../objectValues/reception';
import { GetMovie } from './get-movie';
import { getMovieData } from './mock/get-movie';

jest.mock('../../../infra/config/axios');
const mockedAxios = tmdbAPI as jest.Mocked<typeof tmdbAPI>;

describe('GetMovie Use Case', () => {
  it("should be return a data with format of Movie's props", async () => {
    const getMovie = new GetMovie();

    mockedAxios.get.mockResolvedValue({
      data: getMovieData,
    });

    const expectedResult = new Movie({
      id: 1578,
      backdrop_path: '/tvNuhRlpRozDgsX1zR9gQ2aHv1X.jpg',
      budget: 18000000,
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 36,
          name: 'History',
        },
      ],
      homepage: '',
      original_language: 'en',
      original_title: 'Raging Bull',
      overview:
        'The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.',
      poster_path: '/rEviyDWNbAFmvvCPlkMRPAGUElG.jpg',
      production_companies: [
        {
          id: 60,
          logo_path: '/1SEj4nyG3JPBSKBbFhtdcHRaIF9.png',
          name: 'United Artists',
          origin_country: 'US',
        },
      ],
      release_date: '1980-11-14',
      revenue: 23000000,
      runtime: 129,
      status: 'Released',
      tagline: '',
      title: 'Raging Bull',
      reception: new Reception().calculateReception(7.978),
    });

    const result = await getMovie.execute({ id: '1578' });

    expect(result.movie).toEqual(expectedResult);
  });
});
