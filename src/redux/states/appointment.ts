import { createSlice } from '@reduxjs/toolkit';

import { Appointments } from '@/models';

const initialState: Appointments = {
  appointments: [],
  activeAppointment: null,
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: initialState,

  reducers: {
    addAppointment: (state, action) => {
      return { ...state, appointments: [...state.appointments, action.payload] };
    },
    loadAppointments: (state, action) => {
      return { ...state, appointments: action.payload };
    },
    loadMyAppointments: (state, action) => {
      return { ...state, appointments: action.payload };
    },
    loadActiveAppointment: (state, action) => {
      return { ...state, activeAppointment: action.payload };
    },
    clearActiveAppointment: (state) => {
      return { ...state, activeAppointment: null };
    },
    removeAppointment: (state, action) => {
      return {
        ...state,
        appointments: state.appointments.filter((appointment) => appointment._id !== action.payload),
      };
    },
  },
});

export const {
  loadAppointments,
  loadMyAppointments,
  loadActiveAppointment,
  clearActiveAppointment,
  removeAppointment,
} = appointmentSlice.actions;
