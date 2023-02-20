import { vetPrivateAPI } from '@/api';
import { Employee, User } from '@/models';

interface Employees {
  users: User[];
}

interface ResponseEmployee {
  employee?: Employee;
  msg: string;
}

export const getEmployeeService = async (): Promise<Employees> => {
  const { data } = await vetPrivateAPI.get<Employees>('employee/getEmployees');
  return data;
};

export const addEmployeeService = async (employee: User): Promise<ResponseEmployee> => {
  const { data } = await vetPrivateAPI.post<ResponseEmployee>('employee/addEmployee', employee);
  return data;
};

export const updateEmployeeService = async (employee: User): Promise<ResponseEmployee> => {
  const { data } = await vetPrivateAPI.put<ResponseEmployee>(`employee/updateEmployee/${employee._id}`, employee);
  return data;
};

export const removeEmployeeService = async (id: string): Promise<ResponseEmployee> => {
  const { data } = await vetPrivateAPI.delete<ResponseEmployee>(`employee/deleteEmployee/${id}`);
  return data;
};
