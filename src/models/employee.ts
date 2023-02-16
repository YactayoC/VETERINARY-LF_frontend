import { Role } from './role';

export interface Employees {
  employees: Employee[];
  activeEmployee: Employee | null;
}

export interface Employee {
  _id: string;
  fullname: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  confirmed: boolean;
  role: Role;
}
