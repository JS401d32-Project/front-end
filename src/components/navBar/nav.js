import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './nav.css';

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <img className='logo' src={logo} alt="Logo" />
          <div className="nav-title">
            Case Hawk
          </div>


        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
          </label>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/casePage">Cases</Link>
          <Link to="/contacts">Intake</Link>
          <Link to="/oauth">Logout</Link>
        </div>
      </div>
    </>
  
  );
}
