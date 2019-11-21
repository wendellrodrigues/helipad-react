import React,   { Component, PropType } from 'react';
import drone from '../Assets/drone.png';
import socketIOClient from "socket.io-client";

import './Card.css'

class Card extends Component  {

  constructor() {
    super();
    this.state = {
      id: '0',
      parked: false,
      landingTime: 0,
      avgLandingTime: 0,
      parkedTime: 0,
      avgParkedTime: 0,
      numOfVisits: 0,
      endpoint: "http://127.0.0.1:8000"

    }
  }

  componentDidMount() {

    const {endpoint} = this.state;
    //Very simply connect to the socket
    const socket = socketIOClient(endpoint);
    //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
    console.log('COMPONENT DID MOUNTTTTTTTTTTT');

    socket.on("outgoing data", 
      data => {
        if(data !== null) {
          const incomingDrone = data.num.drone;
          if(incomingDrone) {
            this.setState({
              id: incomingDrone.id,
              parked: incomingDrone.parked,
              landingTime: incomingDrone.landingTime,
              avgLandingTime: incomingDrone.avgLandingTime,
              parkedTime: incomingDrone.parkedTime,
              avgParkedTime: incomingDrone.avgParkedTime,
              numOfVisits: incomingDrone.numOfVisits
            })
          }
          
        }
      }
    );
  }


  renderStateParked(state) {

    return(
      <div className="droneCard_occupied">
        <div className="overflow">
          <img src={drone} alt="drone" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Drone ID : {state.id}</h4>
          <br></br>
          <p className="card-text text-secondary">
            <b>Landed</b>
          </p>
          <p className="card-text text-secondary">
            Landing Time: {state.landingTime} 
          </p>
          <p className="card-text text-secondary">
            Avg Landing Time: {state.avgParkedTime}
          </p>
          <p className="card-text text-secondary">
            Avg Parked Time: {state.avgParkedTime}
          </p>
          <p className="card-text text-secondary">
            Number of Visits: {state.numOfVisits}
          </p>
          <br></br>
        </div>
      </div>
    );
  }

  renderStateOpen(state) {

    console.log('Rendered State OPEN');

    return(
      <div className="droneCard_unoccupied">
        <div className="overflow">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 className="card-title">Space Available</h4>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="card-body text-dark">
        <p className="card-text text-secondary">
          <b>
            Previous Drone: {drone.id}
          </b>
        </p>
          <br></br>
          <p className="card-text text-secondary">
            Parked Time: {state.parkedTime} 
          </p>
          <p className="card-text text-secondary">
            Average Parked Time: {state.avgParkedTime}
          </p>
          <p className="card-text text-secondary">
          Average Landing Time: {state.avgLandingTime}
          </p>
          <br></br>
        </div>
      </div>
    );
  }



  render() {

    if(this.state.parked == true) {
      return(
        <div className="droneCard_occupied">
          <div className="overflow">
            <img src={drone} alt="drone" className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">Drone ID : {this.state.id}</h4>
            <br></br>
            <p className="card-text text-secondary">
              <b>Landed</b>
            </p>
            <p className="card-text text-secondary">
              Landing Time: {this.state.landingTime} 
            </p>
            <p className="card-text text-secondary">
              Avg Landing Time: {this.state.avgParkedTime}
            </p>
            <p className="card-text text-secondary">
              Avg Parked Time: {this.state.avgParkedTime}
            </p>
            <p className="card-text text-secondary">
              Number of Visits: {this.state.numOfVisits}
            </p>
            <br></br>
          </div>
        </div>
      );
    } else {
      return(
        <div className="droneCard_unoccupied">
          <div className="overflow">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="card-title">Space Available</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="card-body text-dark">
          <p className="card-text text-secondary">
            <b>
              Previous Drone: {drone.id}
            </b>
          </p>
            <br></br>
            <p className="card-text text-secondary">
              Parked Time: {this.state.parkedTime} 
            </p>
            <p className="card-text text-secondary">
              Average Parked Time: {this.state.avgParkedTime}
            </p>
            <p className="card-text text-secondary">
            Average Landing Time: {this.state.avgLandingTime}
            </p>
            <br></br>
          </div>
        </div>
      );
    }
  }
}

export default Card;
