import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
import UserContext from './UserContext';

/** NavBar component for Jobly app
 * Display Login and Signup links when no user logged in
 * Display Companies, Jobs, Profile, and Log out link when user logged in
 */
 
const NavBar = ({logout}) => {
  const user = useContext(UserContext);

  if (user) {
    return (
      <nav className="NavBar">
        <div className="NavBar-left"> 
            <NavLink exact to="/">Jobly</NavLink>
        </div> 
        <div className="NavBar-right"> 
          <NavLink exact to="/companies">Companies</NavLink>
          <NavLink exact to="/jobs">Jobs</NavLink>
          <NavLink exact to="/applications">Applications</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <button onClick={logout} className="NavBar-logout-btn">Log out {user.username}</button>
        </div> 
      </nav>
    )
  } else {
    return (
      <nav className="NavBar">
        <div className="NavBar-left"> 
            <NavLink exact to="/">Jobly</NavLink>
        </div> 
        <div className="NavBar-right"> 
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/signup">Signup</NavLink>
        </div> 
      </nav>
    )
  }
}

export default NavBar;