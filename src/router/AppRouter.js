import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ContactScreen } from '../components/veterinary/ContactScreen';
import { MainScreen } from '../components/veterinary/MainScreen';
import { ServiceScreen } from '../components/veterinary/ServiceScreen';
import { DashboardPublic } from './DashboardPublic';
import { PublicRoute } from './PublicRoute';

import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { DashboardPrivate } from './DashboardPrivate';
import { Loading } from '../components/ui/Loading';
import { ConfirmScreen } from '../components/veterinary/ConfirmScreen';
import { DashboardPrivateAdmin } from './DashboardPrivateAdmin';
import { PrivateRouteEmployee } from './PrivateRouteEmployee';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid, type } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.info);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch, type]);

  if (checking && !data) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/services" element={<ServiceScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/confirm-account/:token" element={<ConfirmScreen />} />

        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <DashboardPublic />
            </PublicRoute>
          }
        />

        {type === 'client' ? (
          <Route
            path="/profile/*"
            element={
              <PrivateRouteEmployee isAuthenticated={!!uid}>
                <DashboardPrivate />
              </PrivateRouteEmployee>
            }
          />
        ) : (
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute isAuthenticated={!!uid}>
                <DashboardPrivateAdmin />
              </PrivateRoute>
            }
          />
        )}

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
