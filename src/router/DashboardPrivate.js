import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ClientAppointment } from '../components/client/ClientAppointment';
import { ClientSetting } from '../components/client/ClientSetting';
import { ClientTestimonial } from '../components/client/ClientTestimonial';

export const DashboardPrivate = () => {
  return (
    <Routes>
      <Route path="appointments" element={<ClientAppointment />} />
      <Route path="testimonial" element={<ClientTestimonial />} />
      <Route path="settings" element={<ClientSetting />} />
      <Route path="/*" element={<Navigate to="/profile/appointments" />} />
    </Routes>
  );
};
