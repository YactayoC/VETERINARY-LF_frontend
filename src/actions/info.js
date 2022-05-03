import { fetchToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { startChecking } from './auth';

// Load info
export const infoStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('auth/profile');
      const body = await resp.json();
      dispatch(infoLoaded(body.client));
    } catch (error) {
      console.log(error);
    }
  };
};

const infoLoaded = (data) => ({
  type: types.infoLoaded,
  payload: data,
});

// Update info
export const infoStartUpdate = (valuesForm) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken(`auth/profile`, valuesForm, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        dispatch(infoUpdated(valuesForm));
        dispatch(infoStartLoading());
        dispatch(startChecking());
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const infoUpdated = (valuesForm) => ({
  type: types.infoUpdated,
  payload: valuesForm,
});

// Logout
export const infoLogout = () => ({
  type: types.infoLogout,
});
