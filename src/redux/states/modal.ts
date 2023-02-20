import { createSlice } from '@reduxjs/toolkit';

import { Modal } from '@/models';

const initialState: Modal = {
  isOpenModalAddAppointment: false,
  isOpenModalAddTestimonial: false,
  isOpenModalUpdateAppointment: false,
  isOpenModalUpdateTestimonial: false,
  isOpenModalAddEmployee: false,
  isOpenModalUpdateEmployee: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,

  reducers: {
    setOpenModalAddAppointment: (state, action) => {
      return { ...state, isOpenModalAddAppointment: action.payload };
    },
    setOpenModalUpdateAppointment: (state, action) => {
      return { ...state, isOpenModalUpdateAppointment: action.payload };
    },
    setOpenModalAddTestimonial: (state, action) => {
      return { ...state, isOpenModalAddTestimonial: action.payload };
    },
    setOpenModalUpdateTestimonial: (state, action) => {
      return { ...state, isOpenModalUpdateTestimonial: action.payload };
    },
    setOpenModalAddEmployee: (state, action) => {
      return { ...state, isOpenModalAddEmployee: action.payload };
    },
    setOpenModalUpdateEmployee: (state, action) => {
      return { ...state, isOpenModalUpdateEmployee: action.payload };
    },
  },
});

export const {
  setOpenModalAddAppointment,
  setOpenModalUpdateAppointment,
  setOpenModalAddTestimonial,
  setOpenModalUpdateTestimonial,
  setOpenModalAddEmployee,
  setOpenModalUpdateEmployee,
} = modalSlice.actions;
