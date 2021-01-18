import React from 'react';
import axios from 'axios';
import constants from '../constants';
import './Search.css';

const Search = ({ setResults }) => {
  const OMDB_API_KEY = constants.OMDB_API_KEY;
  const OMDB_API_URL = constants.OMDB_API_URL;

  const submit = query => {
    axios.get(`${OMDB_API_URL}/?s=${query}&type=movie&apikey=${OMDB_API_KEY}`)
    .then(result => {
      const moviesData = result.data;
      const error = moviesData.Error;
      if (error) throw new Error(error);
      const searchResults = moviesData.Search;
      if (searchResults) setResults(moviesData.Search);
    });
  }

  return <input type='text' className='input' onInput={e => submit(e.target.value)} placeholder='eg. Aliens' />;
}

export default Search;
