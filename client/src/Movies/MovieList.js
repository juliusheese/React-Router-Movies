import React from 'react';
import { movie } from './Movie'
import { Link } from "react-router-dom"
const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div>
          <Link to={`/movie${movie.id}`}>
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movies${movie.id}`} >
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div >
  );
}

export default MovieList;
