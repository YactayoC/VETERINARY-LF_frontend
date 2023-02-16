export const PublicRoutes = {
  LOGIN: 'auth/login',
  LOGIN_EMPLOYEE: 'auth/login-employee',
  REGISTER: 'auth/register',
  HOME: '/',
  SERVICES: 'services',
  CONTACT: 'contact',
  CONFIRM_ACCOUNT: 'confirm-account/:token',
};

export const PrivateRoutesEmployee = {
  PRIVATEEMPLOYEE: 'dashboard/*',
  APPOINTMENTS: 'appointments',
  TESTIMONIALS: 'testimonial',
  EMPLOYEES: 'employees',
  PROFILE: 'profile',

  LINK_APPOINTMENTS: 'dashboard/appointments',
  LINK_TESTIMONIALS: 'dashboard/testimonial',
  LINK_EMPLOYEES: 'dashboard/employees',
  LINK_PROFILE: 'dashboard/profile',
};

export const PrivateRoutesClient = {
  PRIVATECLIENT: 'client/*',
  APPOINTMENTS: 'appointments',
  TESTIMONIALS: 'testimonial',
  PROFILE: 'profile',

  LINK_APPOINTMENTS: 'client/appointments',
  LINK_TESTIMONIALS: 'client/testimonial',
  LINK_PROFILE: 'client/profile',
};
