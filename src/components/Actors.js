import React from 'react';
import { actors } from '../data';

const displayMovies = (movies) => movies.map(movie => <li>{movie}</li>)
const displayActors = () => actors.map(actor => <div><h1>Actor's Name: {actor.name}</h1><ul>Movies: {displayMovies(actor.movies)}</ul></div>)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

export default Actors;
