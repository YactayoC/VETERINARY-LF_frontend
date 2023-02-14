import { vetAPI } from '@/api';
import { Testimonial } from '@/models';

export interface TestimonialResponse {
  msg: string;
}

export const getTestimonialsService = async (): Promise<Testimonial[]> => {
  const { data } = await vetAPI.get('testimonial/getTestimonialsAll');
  return data.testimonials;
};

export const removeTestimonialService = async (id: string): Promise<TestimonialResponse> => {
  const { data } = await vetAPI.delete<TestimonialResponse>(`testimonial/deleteTestimonial/${id}`);
  return data;
};
