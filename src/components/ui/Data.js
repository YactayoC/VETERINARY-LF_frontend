import React from 'react';

export const Data = ({ title, button }) => {
  const handleOpenModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__hide');
  };

  let icon;
  if (title === 'Appointments') {
    icon = 'fa-solid fa-calendar-check';
  } else if (title === 'Testimonial') {
    icon = 'fa-solid fa-pen-to-square';
  }

  return (
    <div className="data__general">
      <div>
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <button onClick={handleOpenModal}>
        <i className="fa-solid fa-circle-plus"></i>
        <p>{button}</p>
      </button>
    </div>
  );
};
