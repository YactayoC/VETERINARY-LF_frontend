import { User } from './auth';

export interface Employees {
  employees: Employee[];
  activeEmployee: Employee | null;
}

/* interface extends and omit */

export interface Employee extends Omit<User, 'key | confirmed'> {}
