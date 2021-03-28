import React from 'react';
import logo from "../images/logo-yellow.webp";
import {NavLink} from "react-router-dom";
import SearchBar from './SearchBar';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
          <div className="container">
  <NavLink className="navbar-brand" to="#"> <img className="logo" src={logo} alt="Navbar"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>

  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/services">Services</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/projects">Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/doc">Doc</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/login">Login</NavLink>
      </li>
    
    </ul>
    <SearchBar/>
  </div>
          </div>
</nav>
    )
}

export default NavBar
