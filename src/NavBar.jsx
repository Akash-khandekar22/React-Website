import React from 'react'

import "./NavBar.css";

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
          <div className='navs col-12 mx-none'>

    <nav className="navbar shadow p-0 mb-1 bg-white rounded navbar-expand-lg navbar-light ">
        <div className="container-fluid">
           <NavLink className="navbar-brand" to="/"> <strong className='brand'>Digital Akash</strong></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          activeClassName = "menu_active" className="nav-link active" aria-current="page"to="/">
           <strong>Home</strong> 
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink  activeClassName = "menu_active" className="nav-link" to ="/About">
           <strong>About</strong> 
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to ="/Service">
            <strong>Service</strong>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to ="/Contact">
            <strong>Contact</strong>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default NavBar;
