import React from 'react'
import Movie from '../components/Movie.js';
import './Nominations.css';

const Nominations = ({ nominations, setNominations }) => {

  const removeNomination = movie => {
    setNominations(nominations.filter(nomination => nomination.Title !== movie.Title));
  };

  return (
    <div className="nominations">
      <h2>Nominations</h2>
      {nominations.map((nomination, index) => {
        return (
          <li className="nomination" key={index}>
           <Movie movie={nomination}/>
            <div id="nomination-buttons">
              <button className="nomination-button-remove" onClick={() => removeNomination(nomination)}>Remove</button>
            </div>
          </li>
        );
      })}
    </div>
  )
};

export default Nominations;
