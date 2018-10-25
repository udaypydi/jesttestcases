export const fetchMovieByName = (movieName) => fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=41fedfd0`);

