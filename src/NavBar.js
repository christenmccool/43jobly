import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

/** NavBar component for Jobly app
 * Display Login and Signup links when no user logged in
 * Display Companies, Jobs, Profile, and Log out link when user logged in
 */
 
const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-left"> 
          <NavLink exact to="/">Jobly</NavLink>
      </div> 
      <div className="NavBar-right"> 
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        <NavLink exact to="/login">Login</NavLink>
        <NavLink exact to="/signup">Signup</NavLink>
        <NavLink exact to="/profile">Profile</NavLink>
      </div> 
    </nav>
  )
}

export default NavBar;