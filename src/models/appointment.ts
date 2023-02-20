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
  user: UserInAppointment;
}

export interface AddAppointment {
  mascot: string;
  symptom: string;
  date: Date;
  id?: string;
}

interface UserInAppointment {
  _id: string;
  fullname: string;
}

export interface RequestUpdateAppointment extends Appointment {}

export interface ResponseUpdateAppointment extends Appointment {
  msg?: string;
}
