import React from 'react'
import './Movie.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img className="movie-poster" src={movie.Poster} alt={`${movie.Title} poster`}/>
      <div className="movie-info">
        <h3>{movie.Title} - {movie.Year}</h3>
        <p>Metacritic: {movie.Metascore}%</p>
      </div>
    </div>
  )
};

export default Movie;
