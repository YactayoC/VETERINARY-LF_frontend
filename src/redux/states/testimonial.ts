import { createSlice } from '@reduxjs/toolkit';

import { Testimonials } from '@/models';

const initialState: Testimonials = {
  testimonials: [],
  myTestimonial: [],
};

export const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: initialState,

  reducers: {
    loadTestimonials: (state, action) => {
      return {
        ...state,
        testimonials: action.payload,
      };
    },
    loadTestimonial: (state, action) => {
      return {
        ...state,
        myTestimonial: action.payload,
      };
    },
    addTestimonial: (state, action) => {
      return {
        ...state,
        myTestimonial: [action.payload],
      };
    },
    updateTestimonial: (state, action) => {
      return {
        ...state,
        myTestimonial: [action.payload],
      };
    },
    removeTestimonial: (state, action) => {
      return {
        ...state,
        myTestimonial: [],
      };
    },
  },
});

export const { loadTestimonial, loadTestimonials, addTestimonial, updateTestimonial, removeTestimonial } =
  testimonialSlice.actions;
