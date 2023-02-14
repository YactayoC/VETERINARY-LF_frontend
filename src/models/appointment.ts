export interface Appointments {
  appointments: Appointment[];
  activeAppointment: Appointment | null;
}

export interface Appointment {
  _id: string;
  mascot: string;
  symptom: string;
  date: Date;
  state: string;
  client: Client;
  __v: number;
}

export interface AddAppointment {
  mascot: string;
  symptom: string;
  date: string;
}

interface Client {
  _id: string;
  fullname: string;
}
