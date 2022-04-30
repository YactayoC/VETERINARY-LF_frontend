import React from 'react';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';

export const ClientTestimonial = () => {
  const handleCloseModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal__hide');
  };

  //TODO: Add mtestimonial and get
  // useEffect(() => {
  //   dispatch(infoStartLoading());
  // }, [dispatch]);

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

            <ul className="testimonial-data__datas-data">
              <li className="appointment-data__datas-element">Buena Atención</li>
              <li className="appointment-data__datas-element">17/03/2021</li>
              <li className="appointment-data__datas-element">
                <i className="fa-solid fa-pen element-edit"></i>
              </li>
              <li className="appointment-data__datas-element">
                <i className="fa-solid fa-xmark element-remove"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="modal modal__hide">
        <div className="modal__info">
          <div className="modal__title">
            <h2>Add Testimonial</h2>
            <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
          </div>
          <form className="form animate__animated animate__fadeIn">
            <div className="form__group form__add">
              <input className="form__input" type="date" placeholder="date" name="date" autoComplete="off" />
            </div>
            <div className="form__group form__add">
              <textarea
                className="form__input form__area"
                placeholder="Provide a testimonial about our service"
                name="testimonial"
                autoComplete="off"
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
