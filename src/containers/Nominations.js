import React from 'react';
import Movie from '../components/Movie.js';
import './Nominations.css';

const Nominations = ({ nominations, setNominations }) => {

  const removeNomination = movie => {
    setNominations(nominations.filter(nomination => nomination.Title !== movie.Title));
  };

  return (
    <div className="nominations">
      <h2>Nominations</h2>
      <div className="nominations-list">
        {nominations.map((nomination, index) => {
          return (
            <li className="nomination" key={index} onClick={() => removeNomination(nomination)}>
              <Movie movie={nomination}/>
            </li>
          );
        })}
      </div>
    </div>
  )
};

export default Nominations;
