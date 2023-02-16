import { useDispatch } from 'react-redux';

import {
  addTestimonial,
  loadTestimonial,
  loadTestimonials,
  removeTestimonialAdmin,
  updateTestimonial,
} from '@/redux/states';
import {
  addTestimonialService,
  getMyTestimonialsService,
  getTestimonialsService,
  removeTestimonialService,
  updateTestimonialService,
} from '@/services';

export const useTestimonial = () => {
  const dispath = useDispatch();

  const handleGetTestimonials = async () => {
    try {
      const dataTestimonials = await getTestimonialsService();
      dispath(loadTestimonials(dataTestimonials));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetMyTestimonial = async () => {
    try {
      const dataTestimonial = await getMyTestimonialsService();
      dispath(loadTestimonial(dataTestimonial.testimonial));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTestimonial = async (testimonial: string) => {
    try {
      const dataTestimonial = await addTestimonialService(testimonial);
      dispath(addTestimonial(dataTestimonial.testimonial));
      return { hasError: false, msg: dataTestimonial.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleUpddateTestimonial = async (id: string, testimonial: string) => {
    try {
      const dataTestimonial = await updateTestimonialService(id, testimonial);
      dispath(updateTestimonial(dataTestimonial.testimonial));
      return { hasError: false, msg: dataTestimonial.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleRemoveTestimonial = async (id: string) => {
    try {
      const dataTestimonial = await removeTestimonialService(id);
      dispath(removeTestimonialAdmin(id));
      return { hasError: false, msg: dataTestimonial.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  return {
    handleGetTestimonials,
    handleGetMyTestimonial,
    handleAddTestimonial,
    handleUpddateTestimonial,
    handleRemoveTestimonial,
  };
};
