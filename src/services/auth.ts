import { vetAPI, vetPrivateAPI } from '@/api';
import { Auth, AuthLogin, AuthRegister } from '@/models';

interface ResponseRegister {
  uid: string;
  fullname: string;
  msg: string;
}

export const loginService = async (dataLogin: AuthLogin) => {
  const { data } = await vetAPI.post<Auth>('auth/login', dataLogin);
  return data;
};

export const registerService = async (dataRegister: AuthRegister) => {
  const { data } = await vetAPI.post<ResponseRegister>('auth/register', dataRegister);
  return data;
};

export const revalidateTokenService = async () => {
  const { data } = await vetPrivateAPI.get<Auth>('auth/revalidate');
  return data;
};
