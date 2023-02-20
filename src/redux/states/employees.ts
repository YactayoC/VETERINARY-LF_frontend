import { createSlice } from '@reduxjs/toolkit';

import { Employees } from '@/models';

const initialState: Employees = {
  employees: [],
  activeEmployee: null,
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,

  reducers: {
    loadEmployees(state, action) {
      return { ...state, employees: action.payload };
    },
    activeEmployee(state, action) {
      return { ...state, activeEmployee: action.payload };
    },
    addEmployee(state, action) {
      return { ...state, employees: [...state.employees, action.payload] };
    },
    updateEmployee(state, action) {
      return {
        ...state,
        employees: state.employees.map((employee) => (employee._id === action.payload._id ? action.payload : employee)),
      };
    },
    setDataActiveEmployee: (state, action) => {
      return { ...state, activeEmployee: action.payload };
    },
    removeEmployee(state, action) {
      return { ...state, employees: state.employees.filter((employee) => employee._id !== action.payload) };
    },
  },
});

export const { loadEmployees, activeEmployee, addEmployee, updateEmployee, setDataActiveEmployee, removeEmployee } =
  employeesSlice.actions;
