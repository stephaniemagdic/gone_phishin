import React from 'react';
import phishInLogo from '../../phish-in-logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="phish-in-logo" src={phishInLogo}></img>
    </div>
  );
}

//  We will conditionally render years drop down menu based on what page we are visiting
