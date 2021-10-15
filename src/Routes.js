import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import CompanyPage from './CompanyPage';
import CompanyDetail from './CompanyDetail';
import JobPage from './JobPage';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import NotFound from './NotFound';
import './Routes.css';

/** Routes component for Jobly app
 * Redirects to NotFound component if path not found
 */

const Routes = ({user, signup, login, editProfile}) => {
  if (user) {
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/companies">
            <CompanyPage />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/jobs">
            <JobPage />
          </Route>
          <Route exact path="/login">
            <Redirect to="/"></Redirect>
          </Route>
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          <Route exact path="/profile">
            <ProfileForm user={user} editProfile={editProfile}/>
          </Route>
          <Route exact path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    )
    } else {
      return (
        <div className="Routes">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <Redirect to="/login"></Redirect>
            </Route>
            <Route exact path="/companies/:handle">
              <Redirect to="/login"></Redirect>
            </Route>
            <Route exact path="/jobs">
              <Redirect to="/login"></Redirect>
            </Route>
            <Route exact path="/login">
              <LoginForm login={login}/>
            </Route>
            <Route exact path="/signup">
              <SignupForm signup={signup}/>
            </Route>
            <Route exact path="/profile">
              <Redirect to="/login"></Redirect>
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      )
    }
}

export default Routes;