import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './api';
import UserContext from './UserContext';
import {useLocalStorage} from './hooks';


/** Jobly app components
 * 
 * token obtained from and stored in localStorage
 * user state updated whenever token changes by calling jwt.decode
 * 
 * user state provided to app with context provider UserContext
 * signup, login, and editProfile functions provided to child Routes
 * logout function provided to NavBar
 */

const App = () => {
  const [token, setToken] = useLocalStorage("token", null);

  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(()=> {
    async function getUserFromToken() {
      if (!token) return;
      JoblyApi.token = token;
      const payload = jwt.decode(token);
      const user = await JoblyApi.getUser(payload.username);
      setUser(user);
    }
    getUserFromToken();
  }, [token]);

  useEffect(()=> {
    if (!user) history.push('./');
    if (user) history.push('/companies');
  }, [user]);

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
    setUser(user);
  }

  const logout = async () => {
    JoblyApi.token = null;
    setToken(null);
    setUser(null);
  }
 
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <NavBar logout={logout}/>
        <Routes signup={signup} login={login} editProfile={editProfile}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
