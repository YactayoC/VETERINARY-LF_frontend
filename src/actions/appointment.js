import Swal from 'sweetalert2';
import { fetchToken } from '../helpers/fetch';
import { types } from '../types/types';

// Add new appointment
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

// Update Appointment
export const appointmentStartUpdate = (appointment) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken(`appointment/updateAppointment/${appointment._id}`, appointment, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        dispatch(appointmentUpdated(body.appointment));
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const appointmentUpdated = (appointment) => ({
  type: types.appointmentUpdated,
  payload: appointment,
});

// Delete Appointment
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
      Swal.fire('Error', 'There wan an error', 'error');
    }
  };
};

const appointmentDeleted = (id) => ({
  type: types.appointmentDeleted,
  payload: id,
});

// Loaded Appointments
export const appointmentStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('appointment/getAppointmentClient');
      const body = await resp.json();
      const appointments = body.appointments;
      dispatch(appointmentsLoaded(appointments));
    } catch (error) {
      Swal.fire('Error', 'There wan an error', 'error');
    }
  };
};

const appointmentsLoaded = (appointments) => ({
  type: types.appointmentLoaded,
  payload: appointments,
});

// Clear Appointments
export const appointmentLogout = () => ({
  type: types.appointmentLogout,
});

// Active Appointment
export const appointmentStartActive = (appointment) => ({
  type: types.appointmentSetActive,
  payload: appointment,
});

export const appointmentClearActive = () => ({
  type: types.appointmentClearActive,
});
