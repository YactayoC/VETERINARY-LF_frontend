import { Role } from './role';

export interface Auth {
  uid: string;
  fullname: string;
  role: Role;
  token: string;
}

export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthRegister {
  fullname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}
