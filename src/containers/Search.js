import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ results, setResults }) => {
  const API_KEY = '8a2ec1a4';
  const [searchQuery, setSearchQuery] = useState('');

  const submit = () => {
    axios.get(`http://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`)
    .then(result => {
      const movieData = result.data;
      const error = movieData.Error;
      if (error) throw new Error(error);
      console.log(movieData);
      setResults([...results, movieData]);
    })
    .catch(err => {

    });
  }

  return (
    <div>
      <input type='text' className='input' value={searchQuery} onInput={e => setSearchQuery(e.target.value)} placeholder='eg. Aliens' />
      <button type='button' onClick={submit} >Search</button>
    </div>
  )
}

export default Search;
