import React, { useState } from 'react'
import './Movie.css';

const Movie = ({ movie }) => {
  const [poster, setPoster] = useState(movie.Poster);

  return (
    <div className="movie">
      <img className="movie-poster" src={poster} alt={`${movie.Title} poster`} onError={(e) => setPoster('https://media.comicbook.com/files/img/default-movie.png')}/>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">More info</a>
      </div>
    </div>
  )
};

export default Movie;
