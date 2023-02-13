import { createSlice } from '@reduxjs/toolkit';

import { Testimonial } from '@/models';

const initialState: Testimonial[] = [];

export const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: initialState,

  reducers: {
    loadTestimonials: (state, action) => {
      return action.payload;
    },
    loadTestimonial: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { loadTestimonial, loadTestimonials } = testimonialSlice.actions;
