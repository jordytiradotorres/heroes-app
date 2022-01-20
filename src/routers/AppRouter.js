import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import LoginScreen from '../login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginScreen />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
