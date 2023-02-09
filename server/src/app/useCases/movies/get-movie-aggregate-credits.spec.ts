import { tmdbAPI } from '../../../infra/config/axios';
import { GetMovieAggregateCredits } from './get-movie-aggregate-credits';
import { getMovieAggregateCreditsMock } from './mock/get-movie-aggregate-credits';

jest.mock('../../../infra/config/axios.ts');
const mockedAxios = tmdbAPI as jest.Mocked<typeof tmdbAPI>;

describe('GetMovieAggregateCredits Use Case', () => {
  it("should return a list of actors of movie's cast", async () => {
    // Arrange
    const getMovieAggregateCredits = new GetMovieAggregateCredits();
    const requestParameter = { id: '1578' };
    mockedAxios.get.mockResolvedValue({
      data: getMovieAggregateCreditsMock,
    });
    const expectResult = [
      {
        id: 380,
        name: 'Robert De Niro',
        profile_path: '/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
        character: 'Jake LaMotta',
      },
      {
        id: 4517,
        name: 'Joe Pesci',
        profile_path: '/4AO0Rwdg2ky8Usmgzgj0dvhy7Zw.jpg',
        character: 'Joey',
      },
    ];
    // Act
    const { cast } = await getMovieAggregateCredits.execute(requestParameter);

    // Assert
    expect(cast.length).toBeGreaterThan(1);
    expect(cast).toEqual(expectResult);
  });

  it("should return a list of members of movie's crew", async () => {
    // Arrange
    const getMovieAggregateCredits = new GetMovieAggregateCredits();
    const requestParameter = { id: '1578' };
    mockedAxios.get.mockResolvedValue({
      data: getMovieAggregateCreditsMock,
    });
    const expectResult = [
      {
        department: 'Directing',
        id: 1032,
        job: 'Director',
        name: 'Martin Scorsese',
        profile_path: '/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg',
      },
      {
        department: 'Writing',
        id: 1035,
        job: 'Screenplay',
        name: 'Paul Schrader',
        profile_path: '/ctRxgCUSRFudwFaPG2AanL71Y3V.jpg',
      },
    ];
    // Act
    const { crew } = await getMovieAggregateCredits.execute(requestParameter);

    // Assert
    expect(crew.length).toBeGreaterThan(1);
    expect(crew).toEqual(expectResult);
  });
});
