import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './api';


/** Jobly app components
 * NavBar links to routes definted in Routes component
 */

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    async function getUserFromToken(token) {
      // const res = await JoblyApi.getUser(username);
      // setUser(res);
    }
    getUserFromToken();
  }, [token]);

  const signup = async (data) => {
    const token = await JoblyApi.registerUser(data);
    JoblyApi.token = token;
    setToken(token);
    setUser({username:data.username, firstName:data.firstName, lastName:data.lastName, email:data.email});
    history.push('/companies');
  }

  const login = async (data) => {
    const token = await JoblyApi.loginUser(data);
    JoblyApi.token = token;
    setToken(token);
    const user = await JoblyApi.getUser(data.username);
    console.log(user);
    setUser(user);
    history.push('/companies');
  }

  const editProfile = async (username, password, firstName, lastName, email) => {
    const user = await JoblyApi.patchUser(username, password, firstName, lastName, email);
    setUser(user);
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
