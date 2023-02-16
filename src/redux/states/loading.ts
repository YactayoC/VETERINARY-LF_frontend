import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,

  reducers: {
    isLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { isLoading } = loadingSlice.actions;
