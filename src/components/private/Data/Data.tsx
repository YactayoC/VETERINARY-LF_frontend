import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

interface Props {
  title: string;
  button: string;
}

const Data = ({ title, button }: Props) => {
  const testimonialState = useSelector((state: AppStore) => state.testimonials);
  const { pathname } = useLocation();

  // TODO: mannejar modal con estados globales
  const handleOpenModal = () => {
    const modal = document.querySelector('.modal');
    modal!.classList.remove('modal__hide');
  };

  if (title === 'Appointments') {
    return (
      <div className="data__general">
        <div>
          <i className="fa-solid fa-calendar-check"></i>
          <h3>{title}</h3>
        </div>
        {pathname.includes('client') && (
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

        {pathname.includes('client') && (
          <button onClick={handleOpenModal} disabled={testimonialState.length === 1}>
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

        <button onClick={handleOpenModal}>
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
