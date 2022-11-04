import React, { Suspense, lazy } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Login = lazy(() => import('./user-pages/Login'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));




function AppRoutes ()  {
    return (
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route  path="/dashboard" element={ <Dashboard/> } />
          <Route path="/user-pages/login-1" element={ <Login/> } />
          <Route path="/general-pages/blank-page" element={ <BlankPage/> } />
            <Route element={<Navigate to="/competition" />} ></Route>
        </Routes>
      </Suspense>
    );
}

export default AppRoutes;
