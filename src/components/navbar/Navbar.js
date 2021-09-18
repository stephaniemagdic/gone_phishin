import React from 'react';
import YearsDropdown from '../years_dropdown/YearsDropdown';
import phishInLogo from '../../phish-in-logo.png';
import { Link } from 'react-router-dom';
import ThemeToggle from '../theme_toggle/ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="phish-in-logo"
          alt="phish-in-logo"
          src={phishInLogo}
        ></img>
      </Link>
      <div className="button-container">
        <ThemeToggle />
        <YearsDropdown />
      </div>
    </div>
  );
}

//  We will conditionally render years drop down menu based on what page we are visiting
