import { useDispatch } from 'react-redux';

import { loadTestimonials } from '@/redux/states';
import { getTestimonialsService, removeTestimonialService } from '@/services';

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

  const handleRemoveTestimonial = async (id: string) => {
    try {
      const dataTestimonials = await removeTestimonialService(id);
      dispath(loadTestimonials(dataTestimonials));
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetTestimonials, handleRemoveTestimonial };
};
