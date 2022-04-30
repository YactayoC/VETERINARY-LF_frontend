import { types } from '../types/types';

const initialState = {
  data: false,
  appointments: [],
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

    default:
      return state;
  }
};
