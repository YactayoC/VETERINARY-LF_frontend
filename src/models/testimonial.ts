export interface Testimonial {
  _id: string;
  testimonial: string;
  date: string;
  client: Client;
  __v: number;
}

interface Client {
  _id: string;
  fullname: string;
}
