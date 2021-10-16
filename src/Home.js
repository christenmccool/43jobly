import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from './UserContext';
import './Home.css';

/** Home page for Jobly app
 * When user is not logged in, display Login and Signup buttons
 * When user is logged in, welcome by name.
 */

const Home = () => {
  const user = useContext(UserContext);
  
  return (
    <div className="Home">
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place.</p>
      {user ? 
        <h2>Welcome back, {user.firstName}</h2> :
        <div>
          <Link exact to="/login">Log in</Link>
          <Link exact to="/signup">Sign up</Link>
        </div>
      }
    </div>
  )
}

export default Home;
