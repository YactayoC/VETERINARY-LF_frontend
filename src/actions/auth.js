import { fetchNotToken, fetchToken } from '../helpers/fetch';
import { types } from '../types/types';
import { appointmentLogout } from './appointment';
import { infoLogout, infoStartLoading } from './info';
import Swal from 'sweetalert2';

export const startRegister = (fullname, phone, address, email, password) => {
  return async (dispatch) => {
    const resp = await fetchNotToken('auth/register', { fullname, phone, address, email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      Swal.fire('Success', body.msg, 'success');
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchNotToken('auth/login', { email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      dispatch(
        login({
          uid: body.uid,
          fullname: body.fullname,
        }),
      );
      dispatch(infoStartLoading());
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
    dispatch(infoLogout());
    dispatch(appointmentLogout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchToken('auth/revalidate');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      dispatch(
        login({
          uid: body.uid,
          fullname: body.fullname,
        }),
      );
      dispatch(infoStartLoading());
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});
