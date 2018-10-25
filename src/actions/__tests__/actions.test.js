import { setMovieData, GET_MOVIE_BY_NAME } from '../index';
import { movieData } from '../../resources/mockData/movieData';

describe('Fetch Movie action', () => {
  it('should create an action for fetching movie', () => {
    const expectedAction = {
      type: GET_MOVIE_BY_NAME,
      movieData
    };
    expect(setMovieData(movieData)).toEqual(expectedAction);
  })
});

