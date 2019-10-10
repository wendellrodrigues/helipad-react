import React from 'react';
import './App.css';

import Card from './Card/Card.jsx'
import Nav from './Nav/Nav.jsx'

function App() {
  return (
    <div className="App">
      <Nav/>

      <h4>
        Landing Pad
      </h4>

      <div className="divider"></div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
