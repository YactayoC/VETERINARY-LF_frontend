import React from 'react';
import { useDispatch } from 'react-redux';
import { appointmentStartDeleted } from '../../actions/appointment';

import moment from 'moment';

export const Item = ({ _id, date, state, symptom }) => {
  const dispatch = useDispatch();
  const dateConfig = moment(date);

  const handleOpenModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');
  };

  const handleRemove = (e) => {
    const id = e.target.getAttribute('data-id');
    dispatch(appointmentStartDeleted(id));
  };
  return (
    <ul className="appointment-data__datas-data">
      <li className="appointment-data__datas-element">{symptom}</li>
      <li className="appointment-data__datas-element">{dateConfig.utc().format('DD-MM-YYYY')}</li>
      <li className="appointment-data__datas-element">{state}</li>

      <li className="appointment-data__datas-element">
        <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModal}></i>
      </li>

      <li className="appointment-data__datas-element ">
        <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
      </li>
    </ul>
  );
};
