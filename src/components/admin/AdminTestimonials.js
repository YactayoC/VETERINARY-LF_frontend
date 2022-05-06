import React from 'react';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';

export const AdminTestimonials = () => {
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

            {/* {data && testimonials.length >= 1 ? (
              <>
                {testimonials.map((testimoniale) => (
                  <Item key={testimoniale._id} {...testimoniale} type="testimonial" />
                ))}
              </>
            ) : (
              <p className="no-results">No testimonials found</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
