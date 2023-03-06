import { Aside, Data, Item } from '@/components';
import { useTestimonial } from '@/hooks';
import { AppStore } from '@/redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TestimonialWorkerPage = () => {
  document.title = 'LoyalFriend | Testimonial';
  const { testimonials } = useSelector((state: AppStore) => state.testimonials);
  const { handleGetTestimonials } = useTestimonial();

  useEffect(() => {
    handleGetTestimonials();
  }, []);

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
              <li className="appointment-data__datas-element">Client</li>
              <li className="appointment-data__datas-element">Remove</li>
            </ul>

            {testimonials.length >= 1 ? (
              <>
                {testimonials.map((testimonial) => (
                  <Item key={testimonial._id} testimonial={testimonial} type="testimonial" />
                ))}
              </>
            ) : (
              <p className="no-results">No testimonials found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWorkerPage;
