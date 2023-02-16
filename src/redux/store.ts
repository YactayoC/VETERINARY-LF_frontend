import { configureStore } from '@reduxjs/toolkit';

import { Appointments, Auth, Employees, Modal, Testimonials } from '@/models';
import { appointmentSlice, authSlice, employeeSlice, loadingSlice, modalSlice, testimonialSlice } from './states';

export interface AppStore {
  auth: Auth;
  testimonials: Testimonials;
  appointments: Appointments;
  modal: Modal;
  isLoadingAuth: boolean;
  employees: Employees;
}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    testimonials: testimonialSlice.reducer,
    appointments: appointmentSlice.reducer,
    modal: modalSlice.reducer,
    isLoadingAuth: loadingSlice.reducer,
    employees: employeeSlice.reducer,
  },
});
