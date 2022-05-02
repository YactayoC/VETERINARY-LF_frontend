import { combineReducers } from 'redux';
import { appointmentReducer } from './appointmentReducer';
import { authReducer } from './authReducer';
import { infoReducer } from './infoReducer';
import { testimonialReducer } from './testimonialReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  info: infoReducer,
  appointments: appointmentReducer,
  testimonials: testimonialReducer,
});
