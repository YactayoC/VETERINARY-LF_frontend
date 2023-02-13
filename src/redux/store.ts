import { configureStore } from '@reduxjs/toolkit';

import { Auth, Testimonial } from '@/models';
import { authSlice, testimonialSlice } from './states';

export interface AppStore {
  auth: Auth;
  testimonials: Testimonial[];
}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
    testimonials: testimonialSlice.reducer,
  },
});
