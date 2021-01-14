import React from 'react';
import './Banner.css';

const Banner = ({nominations}) => {
  const MAX_NOMINATIONS = 5;
  let nominationsLength = nominations.length;

  return (nominationsLength >= MAX_NOMINATIONS) ?
    <div id="nominations-complete">
      Thank you for your nominations!
    </div> :
    <div id="nominations-incomplete">
      You have <strong>{MAX_NOMINATIONS - nominationsLength}</strong> nomination(s) left.
    </div>;
}

export default Banner;
