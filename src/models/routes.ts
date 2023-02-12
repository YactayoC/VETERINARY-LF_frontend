export const PublicRoutes = {
  LOGIN: 'login',
  REGISTER: 'register',
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

export const PrivateRoutesUser = {
  APPOINTMENTS: 'user/appointments',
  TESTIMONIALS: 'user/testimonial',
  PROFILE: 'user/profile',
};
