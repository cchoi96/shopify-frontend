import React, { useState } from 'react';
import Banner from './components/Banner.js';
import Logo from './components/Logo.js';
import Search from './containers/Search.js';
import Results from './containers/Results.js';
import Nominations from './containers/Nominations.js';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  return (
    <div className="App">
      <Logo />
      <Banner nominations={nominations}/>
      <Search results={results} setResults={setResults}/>
      <div id="movie-display">
        <Results results={results} setResults={setResults} nominations={nominations} setNominations={setNominations}/>
        <Nominations nominations={nominations} setNominations={setNominations}/>
      </div>
    </div>
  );
}

export default App;
