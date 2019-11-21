import React  from 'react'
import Card   from './Card/Card.jsx'
import Nav    from './Nav/Nav.jsx'

import './App.css'

const App = () => {

  return (

    <div className="App">
      <Nav/>

      <br></br>
      <br></br>
      <br></br>

      <h3>
        Landing Pad
      </h3>

      <br></br>
      <br></br>
      <br></br>


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
