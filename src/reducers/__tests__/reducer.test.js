import { fetchMovieReducer } from '../index';
import { GET_MOVIE_BY_NAME } from '../../actions';
import { movieData } from '../../resources/mockData/movieData';

describe('FetchMovie Reducer', () => {
  it('shoul return the initial state', () => {
    expect(fetchMovieReducer(undefined, {})).toEqual({});
  }),

  it('should set data to movie data reducer on fetching data from API', () => {
    expect(
      fetchMovieReducer(undefined,
      {
        movieData,
        type: GET_MOVIE_BY_NAME
      })
    ).toEqual({movieData})
  });
});