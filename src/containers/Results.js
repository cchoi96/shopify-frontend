import React, { useState } from 'react'

const Results = ({results, setResults, nominations, setNominations}) => {

  const nominate = movie => {
    if (nominations && nominations.some(nomination => nomination.Title === movie.Title)) return;
    setNominations([...nominations, movie]);
  };

  return (
    <div>
      <h2>Results</h2>
      {results.map((movie, index)=> {
        return (
          <li key={index}>
            <h3>{movie.Title}</h3>
            <button onClick={() => nominate(movie)}></button>
          </li>
        );
      })}
    </div>
  )
};

export default Results;
