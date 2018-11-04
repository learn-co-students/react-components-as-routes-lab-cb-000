import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsToRender = actors.map(actor => <div>{actor.name}  {actor.movies.join(' ')} </div> )

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToRender}
    </div>
  );
};

export default Actors;
