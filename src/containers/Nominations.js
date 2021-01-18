import React from 'react';
import Movie from '../components/Movie.js';
import constants from '../constants.js';
import axios from 'axios';
import './Nominations.css';

const Nominations = ({ nominations, setNominations, nominationListID }) => {
  const SERVER_URL = constants.SERVER_URL;
  const removeNomination = async movie => {
    setNominations(nominations.filter(nomination => nomination.imdbID !== movie.imdbID));
    await axios.delete(`${SERVER_URL}/nomination/movie`, {
      data: {
        imdbID: movie.imdbID,
        listID: nominationListID
      }
    });
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
