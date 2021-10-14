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

const Routes = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Home />
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
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </div>
  )
}

export default Routes;