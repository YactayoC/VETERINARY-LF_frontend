import { vetAPI } from '@/api';
import { Testimonial } from '@/models';

export const getTestimonialsDB = async (): Promise<Testimonial[]> => {
  const { data } = await vetAPI.get('testimonial/getTestimonialsAll');
  return data.testimonials;
};
