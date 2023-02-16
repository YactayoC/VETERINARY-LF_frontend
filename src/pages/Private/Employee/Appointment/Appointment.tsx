import { Aside, Data, Item } from '@/components';
import { useAppointment, useModal } from '@/hooks';
import { AppStore } from '@/redux/store';
import { SwalError, SwalSuccess } from '@/utils';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface UpdateAppointmentAdmin {
  state: string;
}

const AppointmentWorkerPage = () => {
  const { appointments, activeAppointment } = useSelector((store: AppStore) => store.appointments);
  const { isOpenModalUpdateAppointment } = useSelector((store: AppStore) => store.modal);
  const { handleGetAppointments, handleUpdateAppointmentState } = useAppointment();
  const { handleOpenModalUpdateAppointment } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAppointmentAdmin>({
    defaultValues: {
      state: activeAppointment?.state,
    },
  });

  useEffect(() => {
    handleGetAppointments();
  }, []);

  const onUpdateAppointment = async (dataUpdateAppoint: UpdateAppointmentAdmin) => {
    const { hasError, msg } = await handleUpdateAppointmentState({
      ...activeAppointment!,
      state: dataUpdateAppoint.state,
    });

    if (hasError) {
      SwalError(msg);
    }

    SwalSuccess('Appointment was updated', msg);
    handleOpenModalUpdateAppointment(false);
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
            {appointments.length >= 0 ? (
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

      <div className={`modal ${!isOpenModalUpdateAppointment ? 'modal__hide' : ''}`}>
        <div className="modal__info">
          <div className="modal__title">
            <h2>Update Appointment</h2>
            <i className="fa-solid fa-rectangle-xmark" onClick={() => handleOpenModalUpdateAppointment(false)}></i>
          </div>
          <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onUpdateAppointment)}>
            <div className="form__group form__add">
              {activeAppointment && (
                <select
                  {...register('state', {
                    required: 'This field is required',
                  })}
                  defaultValue={activeAppointment!.state}
                >
                  <option value="Pending">Pending</option>
                  <option value="Attended">Attended</option>
                  <option value="Not attended">Not attended</option>
                </select>
              )}
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

export default AppointmentWorkerPage;
