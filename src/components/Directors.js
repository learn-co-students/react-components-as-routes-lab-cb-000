import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map((director,i) => (
          <div key={i}>
          <p>Name: {director.name}</p>
          <p>Movies:</p>
          <ul>
            {
              director.movies.map((movie,j) => (
                <li key={j}>{movie}</li>
              ))
            }
          </ul>
          </div>
        ))
      }
    </div>
  );
}

export default Directors
