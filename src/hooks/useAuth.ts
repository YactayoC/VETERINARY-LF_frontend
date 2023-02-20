import { useDispatch } from 'react-redux';

import { login, logout, register, revalidateAuth } from '@/redux';
import { loginEmployeeService, loginService, registerService, revalidateTokenService } from '@/services';
import { AuthLogin, AuthRegister } from '@/models';
import { isLoading } from '@/redux/states';

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleLogin = async (dataLogin: AuthLogin) => {
    try {
      const dataAuth = await loginService(dataLogin);
      dispatch(login(dataAuth));
      return { hasError: false, data: dataAuth };
    } catch (error) {
      return { hasError: true, errorMessage: error.response.data.msg };
    }
  };

  const handleLoginEmployee = async (dataLogin: AuthLogin) => {
    try {
      const dataAuth = await loginEmployeeService(dataLogin);
      console.log(dataAuth);
      dispatch(login(dataAuth));
      return { hasError: false, data: dataAuth };
    } catch (error) {
      return { hasError: true, errorMessage: error.response.data.msg };
    }
  };

  const handleRegister = async (dataRegister: AuthRegister) => {
    try {
      const dataAuth = await registerService(dataRegister);
      dispatch(register());
      return { hasError: false, data: dataAuth };
    } catch (error) {
      return { hasError: true, errorMessage: error.response.data.msg };
    }
  };

  const handleRevalidateAuth = async () => {
    try {
      const dataAuth = await revalidateTokenService();
      dispatch(revalidateAuth(dataAuth));
      dispatch(isLoading(false));
      return { hasError: false, data: dataAuth };
    } catch (error) {
      dispatch(isLoading(false));
      return { hasError: true, errorMessage: error.response.data.msg };
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    handleLogin,
    handleLoginEmployee,
    handleRegister,
    handleRevalidateAuth,
    handleLogout,
  };
};
