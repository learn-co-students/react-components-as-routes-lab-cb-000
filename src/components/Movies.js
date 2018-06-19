import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    	{
    		movies.map(
    			(movie,i) =>
    			<div>
    				{movie.title}
            {movie.time}
    				<ul>
    					{
    						movie.genres.map(
    							(each,i) => <li key={i}>{each}</li>
    						)
    					}
    				</ul>
    			</div>
    			)
    	}
    </div>
  );
};

export default Movies;
