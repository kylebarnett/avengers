import React from 'react'
import avengers from '../data';
import { Route, Link } from 'react-router-dom';
import AvengerDetails from './AvengerDetails';
import AvengerMovie from './AvengerMovie';

export default function AvengersPage(props) {
  // we named props.match.params.id the way we did because in our App.js out Route is /:id
  const id = props.match.params.id
  const avenger = avengers.find(avenger => `${avenger.id}` === id)
  console.log(avenger)
  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>{avenger.nickname}</h4>
      </div>
      <Link to={`/avengers/${props.match.params.id}/details`}>Avenger Details</Link>
      <Link to={`/avengers/${props.match.params.id}/movies`}>Movies </Link>
      <Route path="/avengers/:id/details" render={(props) => <AvengerDetails details={avenger.description} />} />
      <Route path="/avengers/:id/movies" render={(props) => <AvengerMovie movies={avenger.movies} />} />
    </div>
  )
}