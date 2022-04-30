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
import { infoStartUpdate } from '../actions/info';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.info);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking && !data) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/services" element={<ServiceScreen />} />
        <Route path="/contact" element={<ContactScreen />} />

        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <DashboardPublic />
            </PublicRoute>
          }
        />

        <Route
          path="/profile/*"
          element={
            <PrivateRoute isAuthenticated={!!uid}>
              <DashboardPrivate />
            </PrivateRoute>
          }
        />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
