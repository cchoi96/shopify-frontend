import React from 'react';
import constants from '../constants.js';
import './Banner.css';

const Banner = ({ nominations, nominationListID }) => {
  let nominationsLength = nominations.length;
  let remainingNominations = constants.MAX_NOMINATIONS - nominationsLength;

  return ((nominationsLength >= constants.MAX_NOMINATIONS) ?
    <div id="nominations-complete">
      <p>Thank you for your nominations!</p>
      <p>Your shareable link is: <a href={`https://chris-shopify-frontend.herokuapp.com/${nominationListID}`} rel="noreferrer">{`https://chris-shopify-frontend.herokuapp.com/${nominationListID}`}</a></p>
    </div> :
    <div id="nominations-incomplete">
      <p>Please nominate {constants.MAX_NOMINATIONS} movies for the 2021 Shoppies Awards. Click on any search result to nominate it, or on any nomination to remove it.</p>
      <p>You have <strong>{remainingNominations}</strong> {(remainingNominations === 1) ? 'nomination' : 'nominations'} left.</p>
    </div>
  );
}

export default Banner;
