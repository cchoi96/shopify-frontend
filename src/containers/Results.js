import React from 'react'
import Movie from '../components/Movie.js';
import './Results.css';

const Results = ({results, setResults, nominations, setNominations}) => {

  const nominate = movie => {
    setNominations([...nominations, movie]);
  };

  const removeResult = movie => {
    setResults(results.filter(result => result.Title !== movie.Title));
  };

  const isNominated = movie => nominations.some(nomination => nomination.Title === movie.Title);
  
  const canNominate = () => nominations.length < 6;

  return (
    <div className="results">
      <h2>Results</h2>
      {results.map((movie, index)=> {
        return (
          <li className="result" key={index}>
            <Movie movie={movie}/>
            <div id="result-buttons">
              <button className="result-buttons-nominate" disabled={isNominated(movie) || !canNominate()} onClick={() => nominate(movie)}>Nominate</button>
              <button className="result-buttons-remove" onClick={() => removeResult(movie)}>Remove</button>
            </div>
          </li>
        );
      })}
    </div>
  )
};

export default Results;