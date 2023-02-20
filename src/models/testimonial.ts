export interface Testimonials {
  testimonials: Testimonial[];
  myTestimonial: Testimonial[];
}

export interface Testimonial {
  _id: string;
  testimonial: string;
  date: string;
  user: User;
}

interface User {
  _id: string;
  fullname: string;
}
