import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Aside, Data, Item } from '@/components';
import { AppStore } from '@/redux/store';
import { useAppointment } from '@/hooks';

export interface AddAppointment {
  symptom: string;
  date: string;
  mascot: string;
}

const AppointmentClientPage = () => {
  const { appointments, activeAppointment } = useSelector((state: AppStore) => state.appointments);
  const { handleGetMyAppointments, handleAddAppointment, handleClearActiveAppointment } = useAppointment();
  const [isModalActive, setIsModalActive] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAppointment>();

  useEffect(() => {
    handleGetMyAppointments();
  }, []);

  // const onCloseModal = () => {
  //   const modal = document.querySelector('.modal');
  //   modal!.classList.add('modal__hide');
  //   handleClearActiveAppointment();
  // };

  const onAddAppointment = (dataAppointmentAdd: AddAppointment) => {
    handleAddAppointment(dataAppointmentAdd);
    setIsModalActive(false);
    reset();
  };

  // const onUpdate = () => {
  //   if (isFormValidUpdate()) {
  //     dispatch(appointmentStartUpdate(formValuesUpdate));
  //     handleCloseModal();
  //     reset(initialState);
  //   }
  // };

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
        <div className={`modal  ${!isModalActive && 'modal__hide'}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Appointment</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={() => setIsModalActive(false)}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onAddAppointment)}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="datetime-local"
                  autoComplete="off"
                  {...register('date', {
                    required: 'This field is required',
                  })}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Name of the mascot"
                  autoComplete="off"
                  {...register('mascot', {
                    required: 'This field is required',
                  })}
                />
              </div>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Tell us about the service you need"
                  autoComplete="off"
                  {...register('symptom', {
                    required: 'This field is required',
                    minLength: { value: 10, message: 'The symptom must be at least 10 characters long' },
                  })}
                ></textarea>
              </div>
              <div className="form__submit form__submit-add">
                <button className="form__button">Add</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
        // <div className="modal modal__hide">
        //   <div className="modal__info">
        //     <div className="modal__title">
        //       <h2>Update Appointment</h2>
        //       <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
        //     </div>
        //     <form className="form animate__animated animate__fadeIn" onSubmit={handleUpdate}>
        //       <div className="form__group form__add">
        //         <input
        //           className="form__input"
        //           type="datetime-local"
        //           name="date"
        //           autoComplete="off"
        //           value={formValuesUpdate.date}
        //           onChange={handleInputChangeUpdate}
        //         />
        //       </div>
        //       <div className="form__group form__add">
        //         <input
        //           className="form__input"
        //           type="text"
        //           placeholder="Name of the mascot"
        //           name="mascot"
        //           autoComplete="off"
        //           value={formValuesUpdate.mascot}
        //           onChange={handleInputChangeUpdate}
        //         />
        //       </div>
        //       <div className="form__group form__add">
        //         <textarea
        //           className="form__input form__area"
        //           placeholder="Tell us about the service you need"
        //           type="text"
        //           name="symptom"
        //           autoComplete="off"
        //           value={formValuesUpdate.symptom}
        //           onChange={handleInputChangeUpdate}
        //         ></textarea>
        //       </div>
        //       <div className="form__submit form__submit-add">
        //         <button className="form__button">Update</button>
        //       </div>
        //     </form>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default AppointmentClientPage;
