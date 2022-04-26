import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { ContactScreen } from "../components/veterinary/ContactScreen";
import { MainScreen } from "../components/veterinary/MainScreen";
import { ServiceScreen } from "../components/veterinary/ServiceScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/auth/register" element={<RegisterScreen />} />

        <Route path="/" element={<MainScreen />} />
        <Route path="/services" element={<ServiceScreen />} />
        <Route path="/contact" element={<ContactScreen />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
