import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  adminAppointmentsStartLoading,
  adminAppointmentUpdateState,
  appointmentClearActive,
} from '../../actions/appointment';
import { useForm } from '../../hooks/useForm';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';
import { Item } from '../ui/Item';

export const AdminAppointments = () => {
  const dispatch = useDispatch();
  const { data, appointments } = useSelector((state) => state.appointments);
  const { activeAppointment } = useSelector((state) => state.appointments);
  const [formValues, handleInputChange, setImperativeValues] = useForm({ state: '', fullname: '' });

  useEffect(() => {
    dispatch(adminAppointmentsStartLoading());
    if (!activeAppointment) return;
    setImperativeValues(activeAppointment);
    // eslint-disable-next-line
  }, [dispatch, activeAppointment]);

  const handleCloseModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal__hide');
    dispatch(appointmentClearActive());
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(adminAppointmentUpdateState(formValues));
    handleCloseModal();
  };

  return (
    <div className="appointment">
      <Aside />

      <div className="data animate__animated animate__fadeIn">
        <Data title="Appointments" button="Add Appointment" />

        <div className="appoitment-data__table">
          <div className="appointment-data__datas">
            <ul className="appointment-data__datas-header appointment-data__datas-header-admin">
              <li className="appointment-data__datas-element">Symptom</li>
              <li className="appointment-data__datas-element">Date</li>
              <li className="appointment-data__datas-element">Mascot</li>
              <li className="appointment-data__datas-element ">Client</li>
              <li className="appointment-data__datas-element">State</li>
              <li className="appointment-data__datas-element">Edit</li>
              <li className="appointment-data__datas-element">Remove</li>
            </ul>
            {data && appointments.length >= 1 ? (
              <>
                {appointments.map((appointment) => (
                  <Item key={appointment._id} {...appointment} type="appointment" />
                ))}
              </>
            ) : (
              <p className="no-results">No appointments found</p>
            )}
          </div>
        </div>
      </div>

      <div className="modal modal__hide">
        <div className="modal__info">
          <div className="modal__title">
            <h2>Update Appointment</h2>
            <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
          </div>
          <form className="form animate__animated animate__fadeIn" onSubmit={handleUpdate}>
            <div className="form__group form__add">
              <select
                name="state"
                onChange={handleInputChange}
                defaultValue={Boolean(activeAppointment) && activeAppointment.state}
              >
                <option value="Pending">Pending</option>
                <option value="Attended">Attended</option>
                <option value="Not attended">Not attended</option>
              </select>
            </div>

            <div className="form__submit form__submit-add">
              <button className="form__button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
