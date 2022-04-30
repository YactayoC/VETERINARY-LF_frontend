import moment from 'moment';

export const prepareAppointments = (appointments = []) => {
  return appointments.map((appointment) => ({
    ...appointment,
    date: moment(appointment.date).toDate(),
  }));
};
