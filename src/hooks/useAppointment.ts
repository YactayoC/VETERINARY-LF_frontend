import { useDispatch } from 'react-redux';

import { clearActiveAppointment, loadAppointments, loadMyAppointments, removeAppointment } from '@/redux/states';
import {
  addAppointmentService,
  getAppointmentsService,
  getMyAppointmentsService,
  removeAppointmentService,
} from '@/services';
import { AddAppointment } from '@/models';

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
      dispath(loadMyAppointments(data.appointment));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearActiveAppointment = () => {
    dispath(clearActiveAppointment());
  };

  const handleRemoveAppointment = async (id: string) => {
    try {
      const data = await removeAppointmentService(id);
      dispath(removeAppointment(id));
      console.log(data);
      return { hasError: false, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  return {
    handleGetAppointments,
    handleGetMyAppointments,
    handleAddAppointment,
    handleClearActiveAppointment,
    handleRemoveAppointment,
  };
};
