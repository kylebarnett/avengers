import React from 'react'
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <h1>Avengers Database</h1>
      <h4>Danger! This is classified information!</h4>
      <Link to="/avengers">Enter</Link>
    </div>
  )
}