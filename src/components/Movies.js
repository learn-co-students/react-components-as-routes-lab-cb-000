import React from 'react';
import { movies } from '../data';

const displayGenres = (genres) => genres.map(genre => <li>{genre}</li>)
const displayMovies = () => movies.map(movie => <div><h2>Movie Title: {movie.title}</h2><h2>Movie Time: {movie.time}</h2><ul>Genres: {displayGenres(movie.genres)}</ul></div>)

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies()}
    </div>
  );
};

export default Movies;
