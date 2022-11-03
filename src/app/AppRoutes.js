import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Login = lazy(() => import('./user-pages/Login'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/general-pages/blank-page" component={ BlankPage } />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
