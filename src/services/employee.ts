import { vetPrivateAPI } from '@/api';
import { Employee } from '@/models';

export const getEmployeesService = async (): Promise<Employee[]> => {
  const { data } = await vetPrivateAPI.get<Employee[]>('appointment/getAppointments');
  return data;
};
