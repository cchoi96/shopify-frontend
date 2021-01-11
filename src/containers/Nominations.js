import React from 'react'

const Nominations = ({ nominations, setNominations }) => {
  return (
    <div>
      <h1>Nominations</h1>
      {nominations.map(nomination => {
        console.log(nomination)
        return (
          <h3>{nomination.Title}</h3>
        );
      })}
    </div>
  )
};

export default Nominations;
