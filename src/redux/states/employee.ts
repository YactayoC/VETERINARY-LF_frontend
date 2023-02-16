import { createSlice } from '@reduxjs/toolkit';

import { Employees } from '@/models';

const initialState: Employees = {
  employees: [],
  activeEmployee: null,
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: initialState,

  reducers: {
    getEmployees: (state, action) => {
      return action.payload;
    },
  },
});

export const { getEmployees } = employeeSlice.actions;
