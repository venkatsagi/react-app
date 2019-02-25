import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';

const Root = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </React.Fragment>
  </Router>
);

export default Root;
