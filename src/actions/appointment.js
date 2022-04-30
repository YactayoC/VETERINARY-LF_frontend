import Swal from 'sweetalert2';
import { fetchToken } from '../helpers/fetch';
import { prepareAppointments } from '../helpers/prepareAppointments';
import { types } from '../types/types';

export const eventStartAddNew = (appointment) => {
  return async (dispatch, getState) => {
    const { uid, fullname } = getState().auth;
    try {
      const resp = await fetchToken('appointment/addAppointment', appointment, 'POST');
      const body = await resp.json();
      if (body.ok) {
        body.appointment.client = {
          _id: uid,
          fullname,
        };
        Swal.fire('Success', body.msg, 'success');
        dispatch(appointmentAddNew(body.appointment));
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error', error.msg, 'error');
    }
  };
};

const appointmentAddNew = (appointment) => ({
  type: types.appointmentAddNew,
  payload: appointment,
});

export const appointmentStartDeleted = (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken(`appointment/deleteAppointment/${id}`, {}, 'DELETE');
      const body = await resp.json();

      if (body.ok) {
        dispatch(appointmentDeleted(id));
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const appointmentDeleted = (id) => ({
  type: types.appointmentDeleted,
  payload: id,
});

export const appointmentStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('appointment/getAppointments');
      const body = await resp.json();
      const appointments = body.appointments;
      //const appointments = prepareAppointments(body.appointments);
      dispatch(appointmentsLoaded(appointments));
    } catch (error) {
      console.log(error);
    }
  };
};

const appointmentsLoaded = (appointments) => ({
  type: types.appointmentLoaded,
  payload: appointments,
});

export const appointmentLogout = () => ({
  type: types.appointmentLogout,
});
