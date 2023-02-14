import { useLocation } from 'react-router-dom';
import moment from 'moment';

import { Appointment, Testimonial } from '@/models';
import { useAppointment, useTestimonial } from '@/hooks';

interface Props {
  appointment?: Appointment;
  testimonial?: Testimonial;
  type: 'appointment' | 'testimonial' | 'employee';
}

const Item = ({ appointment, testimonial, type }: Props) => {
  const { pathname } = useLocation();

  if (type === 'appointment') {
    const dateConfig = moment(appointment?.date);
    const { handleRemoveAppointment } = useAppointment();

    // Todo: Mostrar modal de eliminado y hacer funcion

    return (
      <ul
        className={
          pathname.includes('dashboard')
            ? 'appointment-data__datas-data appointment-data__datas-data-admin'
            : 'appointment-data__datas-data'
        }
      >
        <li className="appointment-data__datas-element">{appointment?.symptom}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY HH:mm')}</li>
        <li className="appointment-data__datas-element">{appointment?.mascot}</li>
        {/* {pathname.includes('dashboard') && <li className="appointment-data__datas-element">{client.fullname}</li>} */}
        <li className="appointment-data__datas-element">{appointment?.state}</li>

        <li className="appointment-data__datas-element">
          <i
            className="fa-solid fa-pen element-edit"
            data-id={appointment?._id}
            // onClick={handleOpenModalAppointment}
          ></i>
        </li>

        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" onClick={() => handleRemoveAppointment(appointment!._id)}></i>
        </li>
      </ul>
    );
  }

  if (type === 'testimonial') {
    const { handleRemoveTestimonial } = useTestimonial();
    const dateConfig = moment(testimonial?.date);

    return (
      <ul className="testimonial-data__datas-data">
        <li className="appointment-data__datas-element">{testimonial?.testimonial}</li>
        <li className="appointment-data__datas-element">{dateConfig.format('DD-MM-YYYY')}</li>
        {/* {pathname.includes('dashboard') ? (
          <li>{client.fullname}</li>
        ) : (
          <li className="appointment-data__datas-element">
            <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalTestimonial}></i>
          </li>
        )} */}
        <li className="appointment-data__datas-element ">
          <i className="fa-solid fa-xmark element-remove" onClick={() => handleRemoveTestimonial(testimonial!._id)}></i>
        </li>
      </ul>
    );
  }

  return <></>;

  // const handleOpenModalTestimonial = (e) => {
  //   const dad = e.target.parentElement.parentElement;
  //   const _id = e.target.getAttribute('data-id');
  //   const testimonial = dad.childNodes[0].textContent;

  //   const modal = document.querySelector('.modal');
  //   modal!.classList.remove('modal__hide');
  //   // dispatch(testimonialStartActive({ _id, testimonial }));
  // };

  // const handleOpenModalAppointment = (e) => {
  //   const dad = e.target.parentElement.parentElement;
  //   const _id = e.target.getAttribute('data-id');
  //   const symptom = dad.childNodes[0].textContent;
  //   const date = moment(dad.childNodes[1].textContent);
  //   const mascot = dad.childNodes[2].textContent;
  //   const state = dad.childNodes[4].textContent;

  //   const modal = document.querySelector('.modal');
  //   modal!.classList.remove('modal__hide');

  //   if (pathname.includes('dashboard')) {
  //     const fullname = dad.childNodes[3].textContent;
  //     // dispatch(appointmentStartActive({ _id, state, fullname }));
  //   } else {
  //     //dispatch(appointmentStartActive({ _id, symptom, date, mascot }));
  //   }
  // };

  // const handleOpenModalEmployee = (e) => {
  //   const dad = e.target.parentElement.parentElement;
  //   const _id = e.target.getAttribute('data-id');
  //   const fullname = dad.childNodes[0].textContent;
  //   const phone = dad.childNodes[1].textContent;
  //   const email = dad.childNodes[2].textContent;
  //   const address = dad.childNodes[3].textContent;
  //   const modal = document.querySelector('.modal');
  //   modal!.classList.remove('modal__hide');
  //   // dispatch(employeeStartActive({ _id, fullname, phone, email, address }));
  // };

  // } else if (type === 'employees') {
  //   const handleRemove = (e) => {
  //     const id = e.target.getAttribute('data-id');
  //     // dispatch(employeeStartDeleted(id));
  //   };

  //   return (
  //     <ul
  //       className={
  //         pathname.includes('dashboard')
  //           ? 'employee-data__datas-data employee-data__datas-data-admin'
  //           : 'employee-data__datas-data'
  //       }
  //     >
  //       {/* <li className="appointment-data__datas-element">{fullname}</li>
  //       <li className="appointment-data__datas-element">{phone}</li>
  //       <li className="appointment-data__datas-element">{email}</li>
  //       <li className="appointment-data__datas-element">{address}</li>
  //       <li className="appointment-data__datas-element">
  //         <i className="fa-solid fa-pen element-edit" data-id={_id} onClick={handleOpenModalEmployee}></i>
  //       </li>
  //       <li className="appointment-data__datas-element ">
  //         <i className="fa-solid fa-xmark element-remove" data-id={_id} onClick={handleRemove}></i>
  //       </li> */}
  //     </ul>
  //   );
  // } else {
  //   <></>;
  // }
};

export default Item;
