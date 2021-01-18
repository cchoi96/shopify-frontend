import React, { useState, useEffect} from 'react';
import Banner from './components/Banner.js';
import Logo from './components/Logo.js';
import Results from './containers/Results.js';
import Nominations from './containers/Nominations.js';
import constants from './constants.js';
import axios from 'axios';
import './App.css';

function App() {
  const SERVER_URL = constants.SERVER_URL;
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [nominationListID, setNominationListID] = useState('');

  const createNominationList = () => {
    return axios.post(`${SERVER_URL}/nomination`)
    .then(result => {
      const uuid = result?.data?.[0]?.uuid;
      if (uuid) setNominationListID(uuid);
    })
  };

  const getNominatedMovies = listID => {
    return axios.get(`${SERVER_URL}/nomination/list`, {
      params: { listID }
    })
    .then(result => {
      const movies = result.data;
      if (movies.length) setNominations(movies.map(movie => {
        return {
          Title: movie.title,
          Year: movie.year,
          imdbID: movie.imdb_id,
          Poster: movie.poster_url
        }
      }));
    })
  };

  useEffect(() => {
    const url = window.location.pathname;
    const listID = url.length > 1 && url.split('/')[1];
    if (listID) {
      axios.get(`${SERVER_URL}/nomination`, {
        params: { listID }
      })
      .then(result => {
        const data = result.data;
        if (data.length) {
          setNominationListID(listID);
          getNominatedMovies(listID);
        } else createNominationList();
      });
    } else createNominationList();
  }, []);

  return (
    <div className="App">
      <Logo />
      <Banner nominations={nominations} nominationListID={nominationListID}/>
      <div id="movie-display">
        <Results results={results} setResults={setResults} nominations={nominations} setNominations={setNominations} nominationListID={nominationListID}/>
        <Nominations nominations={nominations} setNominations={setNominations} nominationListID={nominationListID}/>
      </div>
    </div>
  );
}

export default App;
