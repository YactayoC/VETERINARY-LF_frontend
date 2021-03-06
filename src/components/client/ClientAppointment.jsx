import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  appointmentClearActive,
  appointmentStartLoading,
  appointmentStartUpdate,
  appointmentStartAddNew,
} from '../../actions/appointment';
import { useForm } from '../../hooks/useForm';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';
import { Item } from '../ui/Item';
import { isEmpty } from 'validator';

import Swal from 'sweetalert2';
import moment from 'moment';

const initialState = {
  mascot: '',
  date: '',
  symptom: '',
};

export const ClientAppointment = () => {
  const dispatch = useDispatch();
  const { data, appointments } = useSelector((state) => state.appointments);
  const { activeAppointment } = useSelector((state) => state.appointments);

  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { mascot, date, symptom } = formValues;

  const [formValuesUpdate, handleInputChangeUpdate, setImperativeValues] = useForm(initialState);

  const dateNow = moment().format('YYYY-MM-DD HH:mm');
  const dateConfig = moment(date);

  useEffect(() => {
    dispatch(appointmentStartLoading());
    if (!activeAppointment) return;
    setImperativeValues(activeAppointment);
    // eslint-disable-next-line
  }, [dispatch, activeAppointment]);

  const handleCloseModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal__hide');
    dispatch(appointmentClearActive());
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(appointmentStartAddNew(formValues));
      handleCloseModal();
      reset(initialState);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (isFormValidUpdate()) {
      dispatch(appointmentStartUpdate(formValuesUpdate));
      handleCloseModal();
      reset(initialState);
    }
  };

  const isFormValid = () => {
    if (mascot.length < 3) {
      Swal.fire('Error', 'Name mascot is required', 'error');
      return false;
    } else if (symptom.length < 10) {
      Swal.fire('Error', 'Symptom is required', 'error');
      return false;
    } else if (dateConfig.diff(dateNow, 'days') < 0) {
      Swal.fire('Error', 'Date is invalid', 'error');
      return false;
    } else if (dateConfig.diff(dateNow, 'years') < 0) {
      Swal.fire('Error', 'Date is invalid', 'error');
      return false;
    } else if (dateConfig.diff(dateNow, 'months') < 0) {
      Swal.fire('Error', 'Date is invalid', 'error');
      return false;
    } else if (dateConfig.diff(dateNow, 'hours') <= 0) {
      Swal.fire('Error', 'Date is invalid', 'error');
      return false;
    }

    return true;
  };

  const isFormValidUpdate = () => {
    if (formValuesUpdate.mascot.length < 3) {
      Swal.fire('Error', 'Name mascot is required', 'error');
      return false;
    } else if (formValuesUpdate.symptom.length < 5) {
      Swal.fire('Error', 'Symptom is required', 'error');
      return false;
    } else if (isEmpty(formValuesUpdate.date)) {
      Swal.fire('Error', 'Date is required', 'error');
      return false;
    }

    return true;
  };

  return (
    <div className="appointment">
      <Aside />

      <div className="data animate__animated animate__fadeIn">
        <Data title="Appointments" button="Add Appointment" />

        <div className="appoitment-data__table">
          <div className="appointment-data__datas">
            <ul className="appointment-data__datas-header">
              <li className="appointment-data__datas-element">Symptom</li>
              <li className="appointment-data__datas-element">Date</li>
              <li className="appointment-data__datas-element">Mascot</li>
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

      {!Boolean(activeAppointment) ? (
        <div className="modal modal__hide">
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Appointment</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleAdd}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="datetime-local"
                  name="date"
                  autoComplete="off"
                  value={date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Name of the mascot"
                  name="mascot"
                  autoComplete="off"
                  value={mascot}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Tell us about the service you need"
                  type="text"
                  name="symptom"
                  autoComplete="off"
                  value={symptom}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form__submit form__submit-add">
                <button className="form__button">Add</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="modal modal__hide">
          <div className="modal__info">
            <div className="modal__title">
              <h2>Update Appointment</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleUpdate}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="datetime-local"
                  name="date"
                  autoComplete="off"
                  value={formValuesUpdate.date}
                  onChange={handleInputChangeUpdate}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Name of the mascot"
                  name="mascot"
                  autoComplete="off"
                  value={formValuesUpdate.mascot}
                  onChange={handleInputChangeUpdate}
                />
              </div>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Tell us about the service you need"
                  type="text"
                  name="symptom"
                  autoComplete="off"
                  value={formValuesUpdate.symptom}
                  onChange={handleInputChangeUpdate}
                ></textarea>
              </div>
              <div className="form__submit form__submit-add">
                <button className="form__button">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
