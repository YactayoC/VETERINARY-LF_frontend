import { configureStore } from '@reduxjs/toolkit';

import { Appointments, Auth, Testimonial } from '@/models';
import { appointmentSlice, authSlice, testimonialSlice } from './states';

export interface AppStore {
  auth: Auth;
  testimonials: Testimonial[];
  appointments: Appointments;
}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    testimonials: testimonialSlice.reducer,
    appointments: appointmentSlice.reducer,
  },
});
