import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';
import { Item } from '../ui/Item';
import {
  testimonialClearActive,
  testimonialStartAddNew,
  testimonialStartLoading,
  testimonialStartUpdate,
} from '../../actions/testimonial';

import Swal from 'sweetalert2';
import moment from 'moment';

const initialState = {
  date: moment(),
  testimonial: '',
};

export const ClientTestimonial = () => {
  const dispatch = useDispatch();
  const { data, testimonials } = useSelector((state) => state.testimonials);
  const { activeTestimonial } = useSelector((state) => state.testimonials);

  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { testimonial } = formValues;

  const [formValuesUpdate, handleInputChangeUpdate, setImperativeValues] = useForm(initialState);

  const handleCloseModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal__hide');
    dispatch(testimonialClearActive());
  };

  useEffect(() => {
    dispatch(testimonialStartLoading());
    if (!activeTestimonial) return;
    setImperativeValues({
      date: moment(),
      ...activeTestimonial,
    });
    // eslint-disable-next-line
  }, [dispatch, activeTestimonial]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(testimonialStartAddNew(formValues));
      handleCloseModal();
      reset(initialState);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (isFormValidUpdate()) {
      dispatch(testimonialStartUpdate(formValuesUpdate));
      handleCloseModal();
      reset(initialState);
    }
  };

  const isFormValid = () => {
    if (testimonial.length < 3) {
      Swal.fire('Error', 'The testimonial must be longer than 10 characters', 'error');
      return false;
    }
    return true;
  };

  const isFormValidUpdate = () => {
    if (formValuesUpdate.testimonial.length < 3) {
      Swal.fire('Error', 'The testimonial must be longer than 10 characters', 'error');
      return false;
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
                {testimonials.map((testimoniale) => (
                  <Item key={testimoniale._id} {...testimoniale} type="testimonial" />
                ))}
              </>
            ) : (
              <p className="no-results">No testimonials found</p>
            )}
          </div>
        </div>
      </div>

      {!Boolean(activeTestimonial) ? (
        <div className="modal modal__hide">
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Testimonial</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleAdd}>
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
      ) : (
        <div className="modal modal__hide">
          <div className="modal__info">
            <div className="modal__title">
              <h2>Update Testimonial</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleUpdate}>
              <div className="form__group form__add">
                <textarea
                  className="form__input form__area"
                  placeholder="Provide a testimonial about our service"
                  name="testimonial"
                  autoComplete="off"
                  value={formValuesUpdate.testimonial}
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
