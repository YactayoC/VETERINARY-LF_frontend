import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';
import { testimonialStartAddNew, testimonialStartLoading } from '../../actions/testimonial';

import Swal from 'sweetalert2';
import { isEmpty } from 'validator';
import { Item } from '../ui/Item';

const initialState = {
  date: '',
  testimonial: '',
};

export const ClientTestimonial = () => {
  const dispatch = useDispatch();
  const { data, testimonials } = useSelector((state) => state.testimonials);
  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { date, testimonial } = formValues;

  const handleCloseModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal__hide');
  };

  useEffect(() => {
    dispatch(testimonialStartLoading());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(testimonialStartAddNew(formValues));
      handleCloseModal();
      reset(initialState);
    }
  };

  const isFormValid = () => {
    if (testimonial.length < 3) {
      Swal.fire('Error', 'Name mascot is required', 'error');
    } else if (isEmpty(date)) {
      Swal.fire('Error', 'Date is required', 'error');
    }

    return true;
  };

  return (
    <div className="appointment">
      <Aside />

      <div className="data animate__animated animate__fadeIn">
        <Data title="Testimonial" button="Add Testimonial" />

        <div className="appoitment-data__table">
          <div className="appointment-data__datas">
            <ul className="testimonial-data__datas-header">
              <li className="appointment-data__datas-element">Info</li>
              <li className="appointment-data__datas-element">Date</li>
              <li className="appointment-data__datas-element">Edit</li>
              <li className="appointment-data__datas-element">Remove</li>
            </ul>

            {data && testimonials.length >= 1 ? (
              <>
                {testimonials.map((testimonial) => (
                  <Item key={testimonial._id} {...testimonial} type="testimonial" />
                ))}
              </>
            ) : (
              <p className="no-results">No testimonials found</p>
            )}
          </div>
        </div>
      </div>

      <div className="modal modal__hide">
        <div className="modal__info">
          <div className="modal__title">
            <h2>Add Testimonial</h2>
            <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
          </div>
          <form className="form animate__animated animate__fadeIn" onSubmit={handleAdd}>
            <div className="form__group form__add">
              <input
                className="form__input"
                type="date"
                placeholder="date"
                name="date"
                autoComplete="off"
                value={date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form__group form__add">
              <textarea
                className="form__input form__area"
                placeholder="Provide a testimonial about our service"
                name="testimonial"
                autoComplete="off"
                value={testimonial}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form__submit form__submit-add">
              <button className="form__button">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
