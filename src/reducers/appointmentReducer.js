import { types } from '../types/types';

const initialState = {
  data: false,
  appointments: [],
  activeAppointment: null,
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.appointmentAddNew:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };

    case types.appointmentLoaded:
      return {
        ...state,
        data: true,
        appointments: [...action.payload],
      };

    case types.appointmentDeleted:
      return {
        ...state,
        appointments: state.appointments.filter((e) => e._id !== action.payload),
      };

    case types.appointmentLogout:
      return {
        ...initialState,
      };

    case types.appointmentSetActive:
      return {
        ...state,
        activeAppointment: action.payload,
      };

    case types.appointmentClearActive:
      return {
        ...state,
        activeAppointment: null,
      };

    case types.appointmentUpdated:
      return {
        ...state,
        appointments: state.appointments.map((e) => (e._id === action.payload._id ? action.payload : e)),
      };

    default:
      return state;
  }
};
