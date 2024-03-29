import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { Appointment, Employee, Testimonial, User } from '@/models';
import { useAppointment, useEmployee, useModal, useTestimonial } from '@/hooks';
import { SwalError, SwalSuccess } from '@/utils';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

interface Props {
  appointment?: Appointment;
  testimonial?: Testimonial;
  employee?: Employee;
  type: 'appointment' | 'testimonial' | 'employees';
}

const Item = ({ appointment, testimonial, employee, type }: Props) => {
  const { pathname } = useLocation();

  if (type === 'appointment') {
    const dateConfig = moment(appointment?.date);
    const { handleRemoveAppointment, handleSetDataActiveAppointment } = useAppointment();
    const { handleOpenModalUpdateAppointment } = useModal();

    const onDeleteAppointment = async (id: string) => {
      const { hasError, msg } = await handleRemoveAppointment(id);

      if (hasError) {
        return SwalError(msg);
      }

      return SwalSuccess('Appointment deleted', msg);
    };

    return (
      <ul
        className={
          pathname.includes('dashboard')
            ? 'appointment-data__datas-data appointment-data__datas-data-admin'
            : 'appointment-data__datas-data'
        }
      >
        <li className="appointment-data__datas-element">{appointment?.symptom}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY HH:mm')}</li>
        <li className="appointment-data__datas-element">{appointment?.mascot}</li>
        {pathname.includes('dashboard') && (
          <li className="appointment-data__datas-element">{appointment?.user.fullname}</li>
        )}
        <li className="appointment-data__datas-element">{appointment?.state}</li>

        <li className="appointment-data__datas-element">
          <i
            className="fa-solid fa-pen element-edit"
            data-id={appointment?._id}
            onClick={() => {
              handleOpenModalUpdateAppointment(true);
              handleSetDataActiveAppointment(appointment!);
            }}
          ></i>
        </li>

        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" onClick={() => onDeleteAppointment(appointment!._id)}></i>
        </li>
      </ul>
    );
  }

  if (type === 'testimonial') {
    const { handleRemoveTestimonial } = useTestimonial();
    const { handleOpenModalUpdateTestimonial } = useModal();
    const dateConfig = moment(testimonial?.date);

    const onDeleteTestimonial = async (id: string) => {
      const { hasError, msg } = await handleRemoveTestimonial(id);

      if (hasError) {
        return SwalError(msg);
      }

      SwalSuccess('Testimonial was deleted ', msg);
    };

    return (
      <ul className="testimonial-data__datas-data">
        <li className="appointment-data__datas-element">{testimonial?.testimonial}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY')}</li>
        {pathname.includes('dashboard') ? (
          <li>{testimonial?.user.fullname}</li>
        ) : (
          <li className="appointment-data__datas-element">
            <i className="fa-solid fa-pen element-edit" onClick={() => handleOpenModalUpdateTestimonial(true)}></i>
          </li>
        )}
        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" onClick={() => onDeleteTestimonial(testimonial!._id)}></i>
        </li>
      </ul>
    );
  }

  if (type === 'employees') {
    const stateEMployee = useSelector((state: AppStore) => state.employees);
    const { handleRemoveEmployee, handleSetDataActiveEmployee } = useEmployee();
    const { handleOpenModalUpdateEmployee } = useModal();

    const handleRemove = async (id: string) => {
      const { hasError, msg } = await handleRemoveEmployee(id);

      if (hasError) {
        return SwalError(msg);
      }

      SwalSuccess('Employee was deleted', msg);
    };

    return (
      <ul
        className={
          pathname.includes('dashboard')
            ? 'employee-data__datas-data employee-data__datas-data-admin'
            : 'employee-data__datas-data'
        }
      >
        <li className="appointment-data__datas-element">{employee?.fullname}</li>
        <li className="appointment-data__datas-element">{employee?.phone}</li>
        <li className="appointment-data__datas-element">{employee?.email}</li>
        <li className="appointment-data__datas-element">{employee?.address}</li>
        <li className="appointment-data__datas-element">
          <i
            className="fa-solid fa-pen element-edit"
            onClick={() => {
              handleOpenModalUpdateEmployee(true);
              handleSetDataActiveEmployee(employee!);
            }}
          ></i>
        </li>
        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" onClick={() => handleRemove(employee!._id)}></i>
        </li>
      </ul>
    );
  }

  return <></>;
};

export default Item;
