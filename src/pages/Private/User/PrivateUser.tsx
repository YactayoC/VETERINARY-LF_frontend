import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';

import { RoutesWith404 } from '@/utils';
import { PrivateRoutesUser } from '@/models';

const Appointment = lazy(() => import('./Appointment/Appointment'));
const Testimonial = lazy(() => import('./Testimonial/Testimonial'));
const Profile = lazy(() => import('./Profile/Profile'));

const PrivateUser = () => {
  return (
    <RoutesWith404>
      <Route path="/" element={<Navigate to={PrivateRoutesUser.APPOINTMENTS} />} />
      <Route path={PrivateRoutesUser.APPOINTMENTS} element={<Appointment />} />
      <Route path={PrivateRoutesUser.TESTIMONIALS} element={<Testimonial />} />
      <Route path={PrivateRoutesUser.PROFILE} element={<Profile />} />
    </RoutesWith404>
  );
};

export default PrivateUser;
