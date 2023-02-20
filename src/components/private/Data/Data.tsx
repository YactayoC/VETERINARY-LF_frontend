import { useModal } from '@/hooks';
import { AppStore } from '@/redux/store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

interface Props {
  title: string;
  button: string;
}

const Data = ({ title, button }: Props) => {
  const { pathname } = useLocation();
  const { handleOpenModalAddAppointment, handleOpenModalAddTestimonial, handleOpenModalAddEmployee } = useModal();

  if (title === 'Appointments') {
    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-calendar-check"></i>
          <h3>{title}</h3>
        </div>
        {pathname.includes('client') && (
          <button onClick={() => handleOpenModalAddAppointment(true)}>
            <i className="fa-solid fa-circle-plus"></i>
            <p>{button}</p>
          </button>
        )}
      </div>
    );
  }
  if (title === 'Testimonial') {
    const { myTestimonial } = useSelector((state: AppStore) => state.testimonials);

    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-pen-to-square"></i>
          <h3>{title}</h3>
        </div>

        {pathname.includes('client') && (
          <button onClick={() => handleOpenModalAddTestimonial(true)} disabled={myTestimonial.length === 1}>
            <i className="fa-solid fa-circle-plus"></i>
            <p>{button}</p>
          </button>
        )}
      </div>
    );
  }
  if (title === 'Employees') {
    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-users"></i>
          <h3>{title}</h3>
        </div>

        <button
          onClick={() => {
            handleOpenModalAddEmployee(true);
          }}
        >
          <i className="fa-solid fa-circle-plus"></i>
          <p>{button}</p>
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Data;
