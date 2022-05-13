import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Data = ({ title, button }) => {
  const { testimonials } = useSelector((state) => state.testimonials);
  const location = useLocation();
  const pathname = location.pathname;

  const handleOpenModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');
  };

  if (title === 'Appointments') {
    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-calendar-check"></i>
          <h3>{title}</h3>
        </div>
        {pathname.includes('profile') && (
          <button onClick={handleOpenModal}>
            <i className="fa-solid fa-circle-plus"></i>
            <p>{button}</p>
          </button>
        )}
      </div>
    );
  } else if (title === 'Testimonial') {
    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-pen-to-square"></i>
          <h3>{title}</h3>
        </div>

        {pathname.includes('profile') && (
          <button onClick={handleOpenModal} disabled={testimonials.length === 1}>
            <i className="fa-solid fa-circle-plus"></i>
            <p>{button}</p>
          </button>
        )}
      </div>
    );
  } else if (title === 'Employees') {
    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-users"></i>
          <h3>{title}</h3>
        </div>

        <button onClick={handleOpenModal} disabled={testimonials.length === 1}>
          <i className="fa-solid fa-circle-plus"></i>
          <p>{button}</p>
        </button>
      </div>
    );
  }
};
