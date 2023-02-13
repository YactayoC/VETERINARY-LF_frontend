export const PublicRoutes = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  HOME: '/',
  SERVICES: 'services',
  CONTACT: 'contact',
  CONFIRM_ACCOUNT: 'confirm-account/:token',
};

export const PrivateRoutesEmployee = {
  APPOINTMENTS: 'dashboard/appointments',
  TESTIMONIALS: 'dashboard/testimonial',
  EMPLOYEES: 'dashboard/employees',
  PROFILE: 'dashboard/profile',
};

export const PrivateRoutesClient = {
  APPOINTMENTS: 'client/appointments',
  TESTIMONIALS: 'client/testimonial',
  PROFILE: 'client/profile',
};
