import React from 'react';
import { useDispatch } from 'react-redux';
import { appointmentStartDeleted } from '../../actions/appointment';

export const Item = ({ _id, date, state, symptom }) => {
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    const id = e.target.getAttribute('data-id');
    dispatch(appointmentStartDeleted(id));
  };
  return (
    <ul className="appointment-data__datas-data">
      <li className="appointment-data__datas-element">{symptom}</li>
      <li className="appointment-data__datas-element">{date}</li>
      <li className="appointment-data__datas-element">{state}</li>

      <li className="appointment-data__datas-element">
        <i className="fa-solid fa-pen element-edit"></i>
      </li>

      <li className="appointment-data__datas-element ">
        <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
      </li>
    </ul>
  );
};
