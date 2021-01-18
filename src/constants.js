require('dotenv').config();

module.exports = Object.freeze({
  MAX_NOMINATIONS: 5,
  SERVER_URL: process.env.REACT_APP_SERVER_URL,
  OMDB_API_KEY: process.env.REACT_APP_OMDB_API_KEY,
  OMDB_API_URL: process.env.REACT_APP_OMDB_API_URL
});