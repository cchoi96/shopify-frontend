import React from 'react'
import Movie from '../components/Movie.js';
import Search from './Search.js';
import constants from '../constants.js';
import axios from 'axios';
import './Results.css';

const Results = ({results, setResults, nominations, setNominations, nominationListID, error, setError}) => {
  const SERVER_URL = constants.SERVER_URL;
  const isNominated = movie => nominations.some(nomination => nomination.imdbID === movie.imdbID);
  const canNominate = () => nominations.length < constants.MAX_NOMINATIONS;
  const getMovie = async imdbID => {
    const movie = await axios.get(`${SERVER_URL}/movie`, {
      params: { imdbID }
    });
    return movie?.data;
  };

  const addMovie = async movie => {
    axios.post(`${SERVER_URL}/movie`, {
      data: { movie }
    });
  };

  const nominateMovie = async movie => {
    setNominations([...nominations, movie]);
    axios.post(`${SERVER_URL}/nomination/movie`, {
      data: {
        imdbID: movie.imdbID,
        listID: nominationListID
      }
    });
  };

  const nominate = async movie => {
    if (!isNominated(movie) && canNominate()) {
      getMovie(movie.imdbID)
      .then(result => {
        if (result.length) return;
        return addMovie(movie);
      })
      .then(() => {
        nominateMovie(movie);
      });
    }
  };

  const showError = (error) ? <p>{error} Please try another search query.</p> : null;

  return (
    <div className="results">
      <h2>Results for {<Search setResults={setResults} error={error} setError={setError}/>}</h2>
      {showError}
      <div className="results-list">
        {results.map((movie, index)=> {
          return (
            <li className="result" key={index} onClick={() => nominate(movie)}>
              <Movie movie={movie}/>
            </li>
          );
        })}
      </div>
    </div>
  )
};

export default Results;