import { fetchToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

// Add new Testimonial
export const testimonialStartAddNew = (testimonial) => {
  return async (dispatch, getState) => {
    const { uid, fullname } = getState().auth;
    try {
      const resp = await fetchToken('testimonial/addTestimonial', testimonial, 'POST');
      const body = await resp.json();
      if (body.ok) {
        body.testimonial.client = {
          _id: uid,
          fullname,
        };
        Swal.fire('Success', body.msg, 'success');
        dispatch(testimonialAddNew(body.testimonial));
      }
    } catch {}
  };
};

const testimonialAddNew = (testimonial) => ({
  type: types.testimonialAddNew,
  payload: testimonial,
});

// Delete Appointment
export const testimonialStartDeleted = (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken(`testimonial/deleteTestimonial/${id}`, {}, 'DELETE');
      const body = await resp.json();

      if (body.ok) {
        dispatch(testimonialDeleted(id));
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const testimonialDeleted = (id) => ({
  type: types.testimonialDeleted,
  payload: id,
});

// Loaded Testimonial
export const testimonialStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('testimonial/getTestimonialClient');
      const body = await resp.json();
      const testimonials = body.testimonial;
      dispatch(testimonialsLoaded(testimonials));
    } catch (error) {
      console.log(error);
    }
  };
};

const testimonialsLoaded = (testimonials) => ({
  type: types.testimonialLoaded,
  payload: testimonials,
});

// Testimonial Logout
export const testimonialStartLogout = () => ({
  type: types.testimonialLogout,
});
