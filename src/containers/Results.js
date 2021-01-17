import React from 'react'
import Movie from '../components/Movie.js';
import Search from './Search.js';
import constants from '../constants.js';
import './Results.css';

const Results = ({results, setResults, nominations, setNominations}) => {

  const isNominated = movie => nominations.some(nomination => nomination.Title === movie.Title);
  const canNominate = () => nominations.length < constants.MAX_NOMINATIONS;
  const nominate = movie => {
    if (!isNominated(movie) && canNominate()) setNominations([...nominations, movie]);
  };

  return (
    <div className="results">
      <h2>Results for {<Search setResults={setResults}/>}</h2>
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