import React from 'react';
import Banner from '../components/Banner.js';
import Movie from '../components/Movie.js';
import './Nominations.css';

const Nominations = ({ nominations, setNominations }) => {

  const removeNomination = movie => {
    setNominations(nominations.filter(nomination => nomination.Title !== movie.Title));
  };

  return (
    <div>
      <h2>Nominations</h2>
      <Banner nominations={nominations} />
      <div className="nominations">
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
    </div>
  )
};

export default Nominations;
