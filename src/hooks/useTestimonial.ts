import { useDispatch } from 'react-redux';

import { loadTestimonials } from '@/redux/states';
import { getTestimonialsDB } from '@/services';

export const useTestimonial = () => {
  const dispath = useDispatch();

  const handleGetTestimonials = async () => {
    try {
      const dataTestimonials = await getTestimonialsDB();
      dispath(loadTestimonials(dataTestimonials));
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetTestimonials };
};
