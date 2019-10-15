import React from 'react';
import './nav.css';

class NavBar extends React.Component {
  render() {
    return (
      <>
            <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            Case Hawk
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <a href="#" target="_blank">home</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
        </div>
      </div>
      </>
  
    );
  }
}
  
export default NavBar;
