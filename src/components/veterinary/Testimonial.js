import React from 'react';

export const Testimonial = ({ testimonial, client }) => {
  return (
    <>
      <div className="testimonial__card">
        <div className="testimonial__card-text">
          <i className="fa-solid fa-quote-left testimonial__quote"></i>
          <p>{testimonial}</p>
        </div>
        <div className="testimonial__card-author">
          <img src="../assets/ui/user.webp" alt="profile" />
          <h3>{client.fullname}</h3>
        </div>
      </div>
    </>
  );
};
