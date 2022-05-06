import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminAppointments } from '../components/admin/AdminAppointments';
import { AdminSetting } from '../components/admin/AdminSetting';
import { AdminTestimonials } from '../components/admin/AdminTestimonials';

export const DashboardPrivateAdmin = () => {
  return (
    <Routes>
      <Route path="appointments" element={<AdminAppointments />} />
      <Route path="testimonials" element={<AdminTestimonials />} />
      <Route path="settings" element={<AdminSetting />} />
      <Route path="*" element={<Navigate to="/dashboard/appointments" />} />
    </Routes>
  );
};
