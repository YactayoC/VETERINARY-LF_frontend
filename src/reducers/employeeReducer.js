import { types } from '../types/types';

const initialState = {
  data: false,
  employees: [],
  activeEmployee: null,
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.adminEmployeesAddNew:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case types.adminEmployeeSetActive:
      return {
        ...state,
        activeEmployee: action.payload,
      };

    case types.adminEmployeeClearActive:
      return {
        ...state,
        activeEmployee: null,
      };

    case types.adminEmployeeUpdated:
      return {
        ...state,
        employees: state.employees.map((e) => (e._id === action.payload._id ? action.payload : e)),
      };

    case types.adminEmployeeDeleted:
      return {
        ...state,
        employees: state.employees.filter((e) => e._id !== action.payload),
      };

    case types.adminEmployeesLoaded:
      return {
        ...state,
        data: true,
        employees: [...action.payload],
      };

    case types.adminEmployeeStartLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
