export interface Testimonials {
  testimonials: Testimonial[];
  myTestimonial: Testimonial[];
}

export interface Testimonial {
  _id: string;
  testimonial: string;
  date: string;
  client: Client;
}

interface Client {
  _id: string;
  fullname: string;
}
