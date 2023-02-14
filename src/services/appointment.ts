import { vetPrivateAPI } from '@/api';
import { AddAppointment, Appointment, Appointments } from '@/models';

export interface AppointmentResponse {
  appointment?: Appointment;
  msg: string;
}

export const getAppointmentsService = async (): Promise<Appointments> => {
  const { data } = await vetPrivateAPI.get<Appointments>('appointment/getAppointments');
  return data;
};

export const getMyAppointmentsService = async (): Promise<Appointments> => {
  const { data } = await vetPrivateAPI.get<Appointments>('appointment/getAppointmentClient');
  return data;
};

export const addAppointmentService = async (appointment: AddAppointment): Promise<AppointmentResponse> => {
  const { data } = await vetPrivateAPI.post<AppointmentResponse>('appointment/addAppointment', appointment);
  return data;
};

export const removeAppointmentService = async (id: string): Promise<AppointmentResponse> => {
  const { data } = await vetPrivateAPI.delete<AppointmentResponse>(`appointment/deleteAppointment/${id}`);
  return data;
};
