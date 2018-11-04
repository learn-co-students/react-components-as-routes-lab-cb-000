import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesToRender = movies.map(movie => <div>{movie.title} {movie.time} {movie.genres.join(' ')} </div> )
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToRender}
    </div>
  );
};

export default Movies;
