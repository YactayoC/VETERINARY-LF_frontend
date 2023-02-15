import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Aside, Data, Item } from '@/components';
import { AppStore } from '@/redux/store';
import { useAppointment, useModal } from '@/hooks';
import { SwalError, SwalSuccess } from '@/utils';

interface AddAppointment {
  symptom: string;
  date: Date;
  mascot: string;
}

const AppointmentClientPage = () => {
  const { appointments, activeAppointment } = useSelector((state: AppStore) => state.appointments);
  const { isOpenModalAddAppointment, isOpenModalUpdateAppointment } = useSelector((state: AppStore) => state.modal);
  const { handleOpenModalAddAppointment, handleOpenModalUpdateAppointment } = useModal();
  const { handleGetMyAppointments, handleAddAppointment, handleSetDataActiveAppointment, handleUpdateAppointment } =
    useAppointment();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAppointment>();

  useEffect(() => {
    handleGetMyAppointments();
  }, []);

  useEffect(() => {
    reset();
  }, [activeAppointment]);

  const onAddAppointment = async (dataAppointmentAdd: AddAppointment) => {
    const { hasError, msg } = await handleAddAppointment(dataAppointmentAdd);

    if (hasError) {
      SwalError(msg);
    }

    handleOpenModalAddAppointment(false);
    SwalSuccess('Appointment added', msg);
    reset();
  };

  const onUpdateAppointment = async (dataAppointmentUpdate: AddAppointment) => {
    const dataModifiedAppointmentUpdate = {
      ...dataAppointmentUpdate,
      id: activeAppointment?._id,
    };
    const { hasError, msg } = await handleUpdateAppointment(dataModifiedAppointmentUpdate);

    if (hasError) {
      SwalError(msg);
    }

    handleSetDataActiveAppointment(null);
    handleOpenModalUpdateAppointment(false);
    SwalSuccess('Appointment updated', msg);
    reset();
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
            {appointments.length >= 1 ? (
              <>
                {appointments.map((appointment) => (
                  <Item key={appointment._id} appointment={appointment} type="appointment" />
                ))}
              </>
            ) : (
              <p className="no-results">No appointments found</p>
            )}
          </div>
        </div>
      </div>

      {!activeAppointment ? (
        <div className={`modal  ${!isOpenModalAddAppointment ? 'modal__hide' : ''}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Appointment</h2>
              <i
                className="fa-solid fa-rectangle-xmark"
                onClick={() => {
                  handleOpenModalAddAppointment(false);
                }}
              ></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onAddAppointment)}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="datetime-local"
                  autoComplete="off"
                  defaultValue={''}
                  {...register('date', {
                    required: 'This field is required',
                  })}
                />
                {errors.date && <p className="error-input">{errors.date.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Name of the mascot"
                  autoComplete="off"
                  defaultValue={''}
                  {...register('mascot', {
                    required: 'This field is required',
                  })}
                />
                {errors.mascot && <p className="error-input">{errors.mascot.message}</p>}
              </div>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Tell us about the service you need"
                  autoComplete="off"
                  defaultValue={''}
                  {...register('symptom', {
                    required: 'This field is required',
                    minLength: { value: 10, message: 'The symptom must be at least 10 characters long' },
                  })}
                ></textarea>
                {errors.symptom && <p className="error-input">{errors.symptom.message}</p>}
              </div>
              <div className="form__submit form__submit-add">
                <button type="submit" className="form__button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={`modal  ${!isOpenModalUpdateAppointment ? 'modal__hide' : ''}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Update Appointment</h2>
              <i
                className="fa-solid fa-rectangle-xmark"
                onClick={() => {
                  handleOpenModalUpdateAppointment(false);
                  handleSetDataActiveAppointment(null);
                }}
              ></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onUpdateAppointment)}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="datetime-local"
                  autoComplete="off"
                  defaultValue={new Date(activeAppointment.date).toISOString().slice(0, 16)}
                  {...register('date', {
                    required: 'This field is required',
                  })}
                />
                {errors.date && <p className="error-input">{errors.date.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Name of the mascot"
                  autoComplete="off"
                  defaultValue={activeAppointment.mascot}
                  {...register('mascot', {
                    required: 'This field is required',
                  })}
                />
                {errors.mascot && <p className="error-input">{errors.mascot.message}</p>}
              </div>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Tell us about the service you need"
                  autoComplete="off"
                  defaultValue={activeAppointment.symptom}
                  {...register('symptom', {
                    required: 'This field is required',
                    minLength: { value: 10, message: 'The symptom must be at least 10 characters long' },
                  })}
                ></textarea>
                {errors.symptom && <p className="error-input">{errors.symptom.message}</p>}
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

export default AppointmentClientPage;
