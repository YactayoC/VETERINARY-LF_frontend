import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { Footer, Hero, Navbar } from '@/components';
import { isEmail, isFullname, isPhone } from '@/utils';

type ContactData = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
  isChecked: boolean;
};

const Contact = () => {
  document.title = 'LoyalFriend | Contact';
  const [inputChecked, setInputChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>();

  const onSendMessage = (dataContact: ContactData) => {
    Swal.fire({
      title: 'Message sent!',
      text: `Your message has been sent, I will contact you as soon as possible. Thank you!`,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  };

  return (
    <>
      <Navbar />
      <Hero title="Contact" />
      <form className="form form-contact animate__animated animate__fadeIn" onSubmit={handleSubmit(onSendMessage)}>
        <h2>Formulary Contact</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Fullname"
            autoComplete="off"
            {...register('fullname', {
              required: 'This field is required',
              minLength: { value: 6, message: 'The fullname must be at least 6 characters long' },
              validate: isFullname,
            })}
          />
          {errors.fullname && <p className="error-input">{errors.fullname.message}</p>}
        </div>

        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            autoComplete="off"
            {...register('email', {
              required: 'This field is required',
              validate: isEmail,
            })}
          />
          {errors.email && <p className="error-input">{errors.email.message}</p>}
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Phone"
            autoComplete="off"
            {...register('phone', {
              required: 'This field is required',
              validate: isPhone,
            })}
          />
          {errors.phone && <p className="error-input">{errors.phone.message}</p>}
        </div>
        <div className="form__group">
          <textarea
            className="form__input form__area"
            placeholder="How can I help you?"
            autoComplete="off"
            {...register('message', {
              required: 'This field is required',
              minLength: { value: 6, message: 'The message must be at least 10 characters long' },
            })}
          ></textarea>
          {errors.message && <p className="error-input">{errors.message.message}</p>}
        </div>
        <div className="form__submit">
          <div className="form__check">
            <input
              type="checkbox"
              id="checkbox1"
              {...register('isChecked', {
                required: 'This field is required',
                onChange(event) {
                  setInputChecked(event.target.checked);
                },
              })}
            />
            <p>
              I have read the <span>privacy policy</span>
            </p>
          </div>
          {errors.isChecked && <p className="error-input">{errors.isChecked.message}</p>}
          <button className="form__button" id="buttonSend" disabled={!inputChecked}>
            Send
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
