import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginEmployeeScreen } from '../components/auth/LoginEmployeeScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const DashboardPublic = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="login-employee" element={<LoginEmployeeScreen />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
