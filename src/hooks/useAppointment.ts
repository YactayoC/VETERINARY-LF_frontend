import { useDispatch } from 'react-redux';

import {
  setDataActiveAppointment,
  loadAppointments,
  loadMyAppointments,
  removeAppointment,
  addAppointment,
  updateAppointment,
} from '@/redux/states';
import {
  addAppointmentService,
  getAppointmentsService,
  getMyAppointmentsService,
  removeAppointmentService,
  updateAppointmentService,
  updateAppointmentStateService,
} from '@/services';
import { AddAppointment, Appointment, RequestUpdateAppointment, ResponseUpdateAppointment } from '@/models';

export const useAppointment = () => {
  const dispath = useDispatch();

  const handleGetAppointments = async () => {
    try {
      const data = await getAppointmentsService();
      dispath(loadAppointments(data.appointments));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetMyAppointments = async () => {
    try {
      const data = await getMyAppointmentsService();
      dispath(loadMyAppointments(data.appointments));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddAppointment = async (appointment: AddAppointment) => {
    try {
      const data = await addAppointmentService(appointment);
      dispath(addAppointment(data.appointment));
      return { hasError: false, appointment: data.appointment, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleSetDataActiveAppointment = (dataActiveAppointment: RequestUpdateAppointment | null) => {
    dispath(setDataActiveAppointment(dataActiveAppointment));
  };

  const handleUpdateAppointment = async (appointment: AddAppointment) => {
    try {
      const data = await updateAppointmentService(appointment);
      dispath(updateAppointment(data.appointment));
      return { hasError: false, appointment: data.appointment, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleUpdateAppointmentState = async (appointment: Appointment) => {
    try {
      const data = await updateAppointmentStateService(appointment);
      dispath(updateAppointment(data.appointment));
      return { hasError: false, appointment: data.appointment, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleRemoveAppointment = async (id: string) => {
    try {
      const data = await removeAppointmentService(id);
      dispath(removeAppointment(id));
      return { hasError: false, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  return {
    handleGetAppointments,
    handleGetMyAppointments,
    handleAddAppointment,
    handleUpdateAppointment,
    handleUpdateAppointmentState,
    handleSetDataActiveAppointment,
    handleRemoveAppointment,
  };
};
