import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { Footer } from '../ui/Footer';
import { Hero } from '../ui/Hero';
import { NavBar } from '../ui/NavBar';
import { isEmail, isMobilePhone } from 'validator';

//TODO: Add actions redux
const initialState = {
  fullname: '',
  email: '',
  phone: '',
  message: '',
};

export const ContactScreen = () => {
  const [valuesForm, handleInputChange, reset] = useForm(initialState);
  const { fullname, email, phone, message } = valuesForm;

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      Swal.fire('Success!', 'Your message has been sent!', 'success');
      const check = document.getElementById('checkbox1');
      const button = document.getElementById('buttonSend');
      check.checked = false;
      button.disabled = true;
      reset();
    }
  };

  const handleCheck = () => {
    const check = document.getElementById('checkbox1');
    const button = document.getElementById('buttonSend');
    console.log(valuesForm);
    if (check.checked) {
      button.disabled = false;
      return true;
    } else {
      button.disabled = true;
      return false;
    }
  };

  const isFormValid = () => {
    if (fullname.length < 5) {
      Swal.fire('Error', 'The fullname must be at least 5 characters long', 'error');
      return false;
    } else if (!isEmail(email)) {
      Swal.fire('Error', 'The email is not valid', 'error');
      return false;
    } else if (!isMobilePhone(phone, ['es-PE'])) {
      Swal.fire('Error', 'The number does not belong to Peru', 'error');
      return false;
    } else if (message.length < 10) {
      Swal.fire('Error', 'The message must be at least 10 characters long', 'error');
      return false;
    } else if (!handleCheck()) {
      Swal.fire('Error', 'You must accept the terms and conditions', 'error');
      return false;
    }

    return true;
  };

  return (
    <>
      <NavBar />
      <Hero title="Contact" />
      <form className="form form-contact animate__animated animate__fadeIn" onSubmit={handleSendMessage}>
        <h2>Formulary Contact</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Fullname"
            name="fullname"
            autoComplete="off"
            value={fullname}
            onChange={handleInputChange}
          />
        </div>

        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Phone"
            name="phone"
            autoComplete="off"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <textarea
            className="form__input form__area"
            placeholder="How can I help you?"
            name="message"
            autoComplete="off"
            value={message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form__submit">
          <div className="form__check">
            <input type="checkbox" id="checkbox1" onClick={handleCheck} />
            <p>
              I have read the <span>privacy policy</span>
            </p>
          </div>
          <button className="form__button" id="buttonSend" disabled>
            Send
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};
