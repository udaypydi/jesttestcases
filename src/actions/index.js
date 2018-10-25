import { fetchMovieByName } from '../service';

export const GET_MOVIE_BY_NAME = 'FETCH_MOVIE_BY_NAME';

export const fetchMovieAction = (movieName) => dispatch => {
  fetchMovieByName(movieName)
    .then((res) => res.json())
    .then((json) => {
      dispatch(setMovieData(json));
    })
};

export const setMovieData = (json) => ({
  type: GET_MOVIE_BY_NAME,
  movieData: json,
})