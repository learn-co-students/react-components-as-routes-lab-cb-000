import React from 'react';
import { actors } from '../data';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((actor,i) => (
          <div className='actor'>
          <p>Name: {actor.name}</p>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie,j) => (
                <li key={j}>{movie}</li>
              ))
            }
          </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Actors;
