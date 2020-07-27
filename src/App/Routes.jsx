import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routing
import PrivateRoute from './Routing';

import Layout from '../Routes/Layout';
import Login from '../Routes/Auth/Login';
import Register from '../Routes/Auth/Register';
import Admin from '../Routes/Admin';
import Projects from '../Routes/Projects';
import Project from '../Routes/Project/Project';
import User from '../Routes/User';
import TaskDetail from '../Routes/ApprovalsAndDetail/Detail/Task';

const Routes = () => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute path='/admin' component={Admin} />
        <PrivateRoute path='/project/:projectId' component={Project} />
        <PrivateRoute path='/projects' component={Projects} />
        <PrivateRoute path='/user' component={User} />
        <PrivateRoute
          path='/notification/:taskId'
          exact
          component={TaskDetail}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
