import { types } from '../types/types';

const initialState = {
  data: false,
  testimonials: [],
  testimonialsAll: [],
  activeTestimonial: null,
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

    case types.testimonialSetActive:
      return {
        ...state,
        activeTestimonial: action.payload,
      };

    case types.testimonialClearActive:
      return {
        ...state,
        activeTestimonial: null,
      };

    case types.testimonialUpdated:
      return {
        ...state,
        testimonials: state.testimonials.map((e) => (e._id === action.payload._id ? action.payload : e)),
      };

    case types.testimonialLoadedAll:
      return {
        ...state,
        testimonialsAll: [...action.payload],
      };

    default:
      return state;
  }
};
