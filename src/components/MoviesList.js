import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  // console.log(movies[0].title);
  const renderMovies = Object.keys(movies).map((movieID) => (
    // console.log(typeof movieID)
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));
  return <ul>{renderMovies}</ul>;
}

export default MoviesList;
