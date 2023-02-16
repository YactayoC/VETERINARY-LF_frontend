import { vetAPI, vetPrivateAPI } from '@/api';
import { Auth, AuthLogin, AuthRegister, AuthUpdate, Client } from '@/models';

interface ResponseRegister {
  msg: string;
}

interface ResponseAuthUpdate {
  client: Client;
  msg: string;
}

export const loginService = async (dataLogin: AuthLogin) => {
  const { data } = await vetPrivateAPI.post<Auth>('auth/login', dataLogin);
  return data;
};

export const loginEmployeeService = async (dataLogin: AuthLogin) => {
  const { data } = await vetPrivateAPI.post<Auth>('employee/login-employee', dataLogin);
  return data;
};

export const registerService = async (dataRegister: AuthRegister) => {
  const { data } = await vetPrivateAPI.post<ResponseRegister>('auth/register', dataRegister);
  return data;
};

export const revalidateTokenService = async () => {
  const { data } = await vetPrivateAPI.get<Auth>('auth/revalidate');
  return data;
};

export const updateProfileService = async (dataProfile: AuthRegister): Promise<AuthUpdate> => {
  const { data } = await vetPrivateAPI.put<AuthUpdate>('auth/profile', dataProfile);
  return data;
};
