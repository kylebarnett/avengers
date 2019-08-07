import React, { useState } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import avengers from './data';
import AvengersList from './components/AvengersList';
import AvengersPage from './components/AvengersPage';
import Home from './components/Home';

function App() {

  const [avenger, setAvenger] = useState(avengers)
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/avengers" component={AvengersList} />
      <Route path="/avengers/:id" component={AvengersPage} />
    </div>
  );
}

export default App;
