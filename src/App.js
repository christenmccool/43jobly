import React from 'react';
import NavBar from './NavBar';
import Routes from './Routes';

/** Jobly app components
 * NavBar links to routes definted in Routes component
 */

function App() {
 
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
