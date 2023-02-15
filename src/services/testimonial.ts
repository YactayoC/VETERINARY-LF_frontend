import { vetAPI, vetPrivateAPI } from '@/api';
import { Testimonial, Testimonials } from '@/models';

export interface TestimonialResponse {
  testimonial: Testimonial;
  msg: string;
}

export const getTestimonialsService = async (): Promise<Testimonial[]> => {
  const { data } = await vetPrivateAPI.get('testimonial/getTestimonialsAll');
  return data.testimonials;
};

export const getMyTestimonialsService = async (): Promise<Testimonial> => {
  const { data } = await vetPrivateAPI.get<Testimonial>('testimonial/getTestimonialClient');
  return data;
};

export const addTestimonialService = async (data: any): Promise<TestimonialResponse> => {
  const { data: dataTestimonial } = await vetPrivateAPI.post<TestimonialResponse>('testimonial/addTestimonial', data);
  return dataTestimonial;
};

export const updateTestimonialService = async (id: string, newTestimonial: string): Promise<TestimonialResponse> => {
  const { data } = await vetPrivateAPI.put<TestimonialResponse>(`testimonial/updateTestimonial/${id}`, {
    testimonial: newTestimonial,
  });
  return data;
};

export const removeTestimonialService = async (id: string): Promise<TestimonialResponse> => {
  const { data } = await vetPrivateAPI.delete<TestimonialResponse>(`testimonial/deleteTestimonial/${id}`);
  return data;
};
