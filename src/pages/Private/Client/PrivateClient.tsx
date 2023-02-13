import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';

import { RoutesWith404 } from '@/utils';
import { PrivateRoutesClient } from '@/models';

const Appointment = lazy(() => import('./Appointment/Appointment'));
const Testimonial = lazy(() => import('./Testimonial/Testimonial'));
const Profile = lazy(() => import('./Profile/Profile'));

const PrivateClient = () => {
  return (
    <RoutesWith404>
      <Route path="/" element={<Navigate to={PrivateRoutesClient.APPOINTMENTS} />} />
      <Route path={PrivateRoutesClient.APPOINTMENTS} element={<Appointment />} />
      <Route path={PrivateRoutesClient.TESTIMONIALS} element={<Testimonial />} />
      <Route path={PrivateRoutesClient.PROFILE} element={<Profile />} />
    </RoutesWith404>
  );
};

export default PrivateClient;
