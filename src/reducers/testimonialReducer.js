import { types } from '../types/types';

const initialState = {
  data: false,
  testimonials: [],
};

export const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.testimonialAddNew:
      return {
        ...state,
        testimonials: [...state.testimonials, action.payload],
      };

    case types.testimonialLoaded:
      return {
        ...state,
        data: true,
        testimonials: [...action.payload],
      };

    case types.testimonialDeleted:
      return {
        ...state,
        testimonials: state.testimonials.filter((e) => e._id !== action.payload),
      };

    case types.testimonialLogout: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
