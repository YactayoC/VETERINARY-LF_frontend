import { Role } from './role';

export interface Auth {
  ok: boolean;
  uid: string;
  fullname: string;
  role: Role;
  token: string;
}
