import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';

import { RoutesWith404 } from '@/utils';
import { PrivateRoutesEmployee } from '@/models';

const Appointment = lazy(() => import('./Appointment/Appointment'));
const Testimonial = lazy(() => import('./Testimonial/Testimonial'));
const Employee = lazy(() => import('./Employees/Employee'));
const Profile = lazy(() => import('./Profile/Profile'));

const PrivateEmployee = () => {
  return (
    <RoutesWith404>
      <Route path="/" element={<Navigate to={PrivateRoutesEmployee.APPOINTMENTS} />} />
      <Route path={PrivateRoutesEmployee.APPOINTMENTS} element={<Appointment />} />
      <Route path={PrivateRoutesEmployee.TESTIMONIALS} element={<Testimonial />} />
      <Route path={PrivateRoutesEmployee.EMPLOYEES} element={<Employee />} />
      <Route path={PrivateRoutesEmployee.PROFILE} element={<Profile />} />
    </RoutesWith404>
  );
};

export default PrivateEmployee;
