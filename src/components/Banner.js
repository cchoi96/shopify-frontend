import React from 'react';
import constants from '../constants.js';
import './Banner.css';

const Banner = ({ nominations }) => {
  let nominationsLength = nominations.length;

  return ((nominationsLength >= constants.MAX_NOMINATIONS) ?
    <div id="nominations-complete">
      <p>Thank you for your nominations!</p>
    </div> :
    <div id="nominations-incomplete">
      <p>Please nominate {constants.MAX_NOMINATIONS} movies for the 2021 Shoppies Awards. Click on any search result to nominate it, or on any nomination to remove it.</p>
      <p>You have <strong>{constants.MAX_NOMINATIONS - nominationsLength}</strong> nomination(s) left.</p>
    </div>
  );
}

export default Banner;
