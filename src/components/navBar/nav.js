import React from 'react';
import './nav.css'

class NavBar extends React.Component{
    render(){
      return(
        <>
            <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            Case Hawk
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a href="#" target="_blank">home</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
          <a href="#" target="_blank">something</a>
        </div>
      </div>
        </>
  
      )
    }
  }
  
  export default NavBar;