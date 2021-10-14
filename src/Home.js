import React from 'react';
import './Home.css';

/** Home page for Jobly app
 * When user is not logged in, display Login and Signup buttons
 * When user is logged in, welcome by name.
 */

const Home = () => {
  return (
    <div className="Home">
      <h1>Jobly</h1>
      <h2>All the jobs in one convenient place.</h2>
    </div>
  )
}

export default Home;
