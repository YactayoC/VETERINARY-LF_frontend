import React from 'react';
import { useDispatch } from 'react-redux';
import { appointmentStartActive, appointmentStartDeleted } from '../../actions/appointment';
import { testimonialStartActive, testimonialStartDeleted } from '../../actions/testimonial';

import moment from 'moment';

export const Item = ({ _id, date, state, symptom, type, testimonial, mascot }) => {
  const dispatch = useDispatch();
  const dateConfig = moment(date);

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

    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');
    dispatch(appointmentStartActive({ _id, symptom, date, mascot }));
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
        <li className="appointment-data__datas-element">
          <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalTestimonial}></i>
        </li>

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
      <ul className="appointment-data__datas-data">
        <li className="appointment-data__datas-element">{symptom}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY HH:mm')}</li>
        <li className="appointment-data__datas-element">{mascot}</li>
        <li className="appointment-data__datas-element">{state}</li>

        <li className="appointment-data__datas-element">
          <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalAppointment}></i>
        </li>

        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
        </li>
      </ul>
    );
  }
};
