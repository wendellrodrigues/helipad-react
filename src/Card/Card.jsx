import React,   { Component, PropType } from 'react';
import drone from '../Assets/drone.png'


const Card = props => {

  return(
    <div className="card text-center">
      <div className="overflow">
        <img src={drone} alt="drone" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Drone</h4>
        <p className="card-text text-secondary">
          Here is a line
        </p>
      </div>
    </div>
  );


}

export default Card;
