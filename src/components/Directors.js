import React from 'react';
import { directors } from '../data';

const displayDirectors = () => directors.map(director => <div><h3>Director's Name: {director.name}</h3><ul>Movies: {displayMovies(director.movies)}</ul></div>)
const displayMovies = (movies) => movies.map(movie => <li>{movie}</li>)
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

export default Directors
