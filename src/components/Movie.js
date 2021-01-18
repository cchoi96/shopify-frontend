import React from 'react';
import { Animated } from 'react-animated-css';
import './Movie.css';

const Movie = ({ movie }) => {
  return (
    <Animated animationIn="bounceIn">
      <div className="movie">
        <img className="movie-poster" src={movie.Poster} alt={`'${movie.Title}' poster`}/>
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">More info</a>
        </div>
      </div>
    </Animated>
  )
};

export default Movie;
