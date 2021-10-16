import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './api';


/** Jobly app components
 * NavBar links to routes defined in Routes component
 */

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    async function getUserFromToken() {
      if (!token) return;
      JoblyApi.token = token;
      const payload = jwt.decode(token);
      const user = await JoblyApi.getUser(payload.username);
      setUser(user);
      history.push('/companies');
    }
    getUserFromToken();
  }, [token]);

  const signup = async (data) => {
    const token = await JoblyApi.registerUser(data);
    setToken(token);
  }

  const login = async (data) => {
    const token = await JoblyApi.loginUser(data);
    setToken(token);
  }

  const editProfile = async (username, data) => {
    const user = await JoblyApi.patchUser(username, data);
    setUser({username:data.username, firstName:data.firstName, lastName:data.lastName, email:data.email});
    history.push('/companies');
  }

  const logout = async () => {
    JoblyApi.token = null;
    setToken(null);
    setUser(null);
  }
 
  return (
    <div>
      <NavBar user={user} logout={logout}/>
      <Routes user={user} signup={signup} login={login} editProfile={editProfile}/>
    </div>
  );
}

export default App;
