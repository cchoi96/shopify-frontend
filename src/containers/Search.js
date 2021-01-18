import React from 'react';
import axios from 'axios';
import constants from '../constants';
import _ from 'lodash';
import './Search.css';

const Search = ({ setResults, error, setError}) => {
  const OMDB_API_KEY = constants.OMDB_API_KEY;
  const OMDB_API_URL = constants.OMDB_API_URL;

  const submit = _.debounce(function(query) {
    if (query.length) axios.get(`${OMDB_API_URL}/?s=${query}&type=movie&apikey=${OMDB_API_KEY}`)
    .then(result => {
      const moviesData = result.data;
      const searchError = moviesData.Error;
      if (searchError) {
        setError(searchError);
        return;
      }
      if (error) setError('');
      const searchResults = moviesData.Search;
      if (searchResults) setResults(moviesData.Search);
    });
  }, 1000);

  return <input type='text' className='input' onInput={e => submit(e.target.value)} placeholder='eg. Aliens' />;
}

export default Search;
