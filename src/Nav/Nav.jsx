import React,   { Component, PropType } from 'react';
import { Navbar } from 'react-bootstrap';

import './Nav.css'

class Nav extends Component {
  
  render() { 

    return (  
      <Navbar bg="dark" variant="dark" className="navBar"></Navbar> 
    );

  }
}
 
export default Nav;