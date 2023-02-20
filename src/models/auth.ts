import { Role } from './role';

export interface Auth {
  user: User;
  token: string | null;
}

export interface User {
  _id: string;
  fullname: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  key: string | null;
  confirmed: boolean;
  role: Role;
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

export interface AuthUpdate extends Auth {
  msg: string;
}

export interface AuthProfile extends AuthRegister {}
