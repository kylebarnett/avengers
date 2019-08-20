import React from 'react';

export default function AvengerMovie(props) {
  return (
    <div>
      {props.movies.map(movie => (
        <p>{movie}</p>
      ))}
    </div>
  )
}