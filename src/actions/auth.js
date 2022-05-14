import { fetchNotToken, fetchToken } from '../helpers/fetch';
import { types } from '../types/types';
import { appointmentLogout } from './appointment';
import { employeeInfoStartLoading, infoLogout, infoStartLoading } from './info';
import Swal from 'sweetalert2';
import { testimonialStartLogout } from './testimonial';
import { employeeStartLogout } from './employees';

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
      localStorage.setItem('type', body.type);
      dispatch(
        login({
          uid: body.uid,
          fullname: body.fullname,
          type: body.type,
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
    dispatch(testimonialStartLogout());
    dispatch(employeeStartLogout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

export const startChecking = () => {
  return async (dispatch) => {
    const type = localStorage.getItem('type') || '';
    let resp = null;
    let body = null;

    if (type !== undefined && type === 'client') {
      resp = await fetchToken('auth/revalidate');
      body = await resp.json();
      if (body.ok) {
        dispatch(infoStartLoading());
      }
    } else if (type !== undefined && type === 'employee') {
      resp = await fetchToken('employee/revalidate-employee');
      body = await resp.json();
      if (body.ok) {
        dispatch(employeeInfoStartLoading());
      }
    } else {
      dispatch(checkingFinish());
      startChecking();
      return;
    }

    localStorage.setItem('token', body.token);
    dispatch(
      login({
        uid: body.uid,
        fullname: body.fullname,
        type: body.type,
      }),
    );
  };
};

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

// export const employeeStartChecking = () => {
//   return async (dispatch) => {
//     const resp = await fetchToken('employee/revalidate-employee');
//     const body = await resp.json();

//     if (body.ok) {
//       localStorage.setItem('token', body.token);
//       dispatch(
//         login({
//           uid: body.uid,
//           fullname: body.fullname,
//           type: body.type,
//         }),
//       );
//       dispatch(employeeInfoStartLoading());
//     } else {
//       dispatch(checkingFinish());
//     }
//   };
// };

// Confirm
export const startConfirm = (token) => {
  return async (dispatch) => {
    const resp = await fetchNotToken(`auth/confirm/${token}`);
    const body = await resp.json();

    if (!body.ok) {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};
