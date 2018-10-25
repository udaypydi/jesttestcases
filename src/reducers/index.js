import { combineReducers } from 'redux';

import { GET_MOVIE_BY_NAME } from '../actions';

export const fetchMovieReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_MOVIE_BY_NAME: 
      return { ...state, movieData: action.movieData };

    default:
      return state;  
  }
};

export default combineReducers({
  movieData: fetchMovieReducer,
});
