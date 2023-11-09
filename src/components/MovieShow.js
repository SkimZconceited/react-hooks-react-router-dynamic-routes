import React from 'react';
import { useParams } from 'react-router-dom';

function MovieShow({ movies }) {
    const params = useParams();
    // console.log(params)
  return (
    <div>
        <p>We are in MovieShow</p>
        <h3>{movies[params.movieID].title}</h3>
    </div>
  )
}

export default MovieShow