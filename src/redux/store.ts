import { configureStore } from '@reduxjs/toolkit';

import { Appointments, Auth, Modal, Testimonials } from '@/models';
import { appointmentSlice, authSlice, modalSlice, testimonialSlice } from './states';

export interface AppStore {
  auth: Auth;
  testimonials: Testimonials;
  appointments: Appointments;
  modal: Modal;
}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    testimonials: testimonialSlice.reducer,
    appointments: appointmentSlice.reducer,
    modal: modalSlice.reducer,
  },
});
