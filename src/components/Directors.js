import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsToRender = directors.map(director => <div>{director.name}  {director.movies.join(' ')} </div> )

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsToRender}
    </div>
  );
}

export default Directors
