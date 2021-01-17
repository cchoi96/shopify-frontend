import React from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ setResults }) => {
  const API_KEY = '8a2ec1a4';

  const submit = query => {
    axios.get(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`)
    .then(result => {
      const moviesData = result.data;
      const error = moviesData.Error;
      if (error) throw new Error(error);
      const searchResults = moviesData.Search;
      if (searchResults) setResults(moviesData.Search);
    })
    .catch(err => {

    });
  }

  return <input type='text' className='input' onInput={e => submit(e.target.value)} placeholder='eg. Aliens' />;
}

export default Search;
