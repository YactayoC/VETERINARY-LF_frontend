import React from 'react';
import { useDispatch } from 'react-redux';
import { appointmentStartActive, appointmentStartDeleted } from '../../actions/appointment';
import { testimonialStartActive, testimonialStartDeleted } from '../../actions/testimonial';

import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { employeeStartActive, employeeStartDeleted } from '../../actions/employees';

export const Item = ({
  _id,
  date,
  state,
  symptom,
  type,
  testimonial,
  mascot,
  client,
  fullname,
  phone,
  email,
  address,
}) => {
  const dispatch = useDispatch();
  const dateConfig = moment(date);
  const location = useLocation();
  const pathname = location.pathname;

  const handleOpenModalTestimonial = (e) => {
    const dad = e.target.parentElement.parentElement;
    const _id = e.target.getAttribute('data-id');
    const testimonial = dad.childNodes[0].textContent;

    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');
    dispatch(testimonialStartActive({ _id, testimonial }));
  };

  const handleOpenModalAppointment = (e) => {
    const dad = e.target.parentElement.parentElement;
    const _id = e.target.getAttribute('data-id');
    const symptom = dad.childNodes[0].textContent;
    const date = moment(dad.childNodes[1].textContent);
    const mascot = dad.childNodes[2].textContent;
    const state = dad.childNodes[4].textContent;

    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');

    if (pathname.includes('dashboard')) {
      const fullname = dad.childNodes[3].textContent;
      dispatch(appointmentStartActive({ _id, state, fullname }));
    } else {
      dispatch(appointmentStartActive({ _id, symptom, date, mascot }));
    }
  };

  const handleOpenModalEmployee = (e) => {
    const dad = e.target.parentElement.parentElement;
    const _id = e.target.getAttribute('data-id');
    const fullname = dad.childNodes[0].textContent;
    const phone = dad.childNodes[1].textContent;
    const email = dad.childNodes[2].textContent;
    const address = dad.childNodes[3].textContent;
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');
    dispatch(employeeStartActive({ _id, fullname, phone, email, address }));
  };

  if (type === 'testimonial') {
    const handleRemove = (e) => {
      const id = e.target.getAttribute('data-id');
      dispatch(testimonialStartDeleted(id));
    };

    return (
      <ul className="testimonial-data__datas-data">
        <li className="appointment-data__datas-element">{testimonial}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY')}</li>
        {pathname.includes('dashboard') ? (
          <li>{client.fullname}</li>
        ) : (
          <li className="appointment-data__datas-element">
            <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalTestimonial}></i>
          </li>
        )}
        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
        </li>
      </ul>
    );
  } else if (type === 'appointment') {
    const handleRemove = (e) => {
      const id = e.target.getAttribute('data-id');
      dispatch(appointmentStartDeleted(id));
    };
    return (
      <ul
        className={
          pathname.includes('dashboard')
            ? 'appointment-data__datas-data appointment-data__datas-data-admin'
            : 'appointment-data__datas-data'
        }
      >
        <li className="appointment-data__datas-element">{symptom}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY HH:mm')}</li>
        <li className="appointment-data__datas-element">{mascot}</li>
        {pathname.includes('dashboard') && <li className="appointment-data__datas-element">{client.fullname}</li>}
        <li className="appointment-data__datas-element">{state}</li>

        <li className="appointment-data__datas-element">
          <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalAppointment}></i>
        </li>

        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
        </li>
      </ul>
    );
  } else if (type === 'employees') {
    const handleRemove = (e) => {
      const id = e.target.getAttribute('data-id');
      dispatch(employeeStartDeleted(id));
    };

    return (
      <ul
        className={
          pathname.includes('dashboard')
            ? 'employee-data__datas-data employee-data__datas-data-admin'
            : 'employee-data__datas-data'
        }
      >
        <li className="appointment-data__datas-element">{fullname}</li>
        <li className="appointment-data__datas-element">{phone}</li>
        <li className="appointment-data__datas-element">{email}</li>
        <li className="appointment-data__datas-element">{address}</li>
        <li className="appointment-data__datas-element">
          <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalEmployee}></i>
        </li>
        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
        </li>
      </ul>
    );
  }
};
