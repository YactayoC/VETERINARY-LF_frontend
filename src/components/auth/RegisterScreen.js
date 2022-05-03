import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { isEmail, isMobilePhone } from 'validator';

import Swal from 'sweetalert2';

const initialState = {
  fullname: '',
  phone: '',
  address: '',
  email: '',
  password1: '',
  password2: '',
};

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { fullname, phone, address, email, password1, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid() === true) {
      dispatch(startRegister(fullname, phone, address, email, password1));
      reset(initialState);
    }
  };

  const isFormValid = () => {
    if (fullname.length < 3) {
      Swal.fire('Error', 'The name must be at least 3 characters long', 'error');
      return false;
    } else if (!isMobilePhone(phone, ['es-PE'])) {
      Swal.fire('Error', 'The number does not belong to Peru', 'error');
      return false;
    } else if (address.length < 5) {
      Swal.fire('Error', 'The address must be at least 5 characters long', 'error');
      return false;
    } else if (!isEmail(email)) {
      Swal.fire('Error', 'The email is not valid', 'error');
      return false;
    } else if (password1 !== password2) {
      Swal.fire('Error', 'The passwords do not match', 'error');
      return false;
    }

    return true;
  };

  return (
    <div className="auth">
      <div className="auth__img animate__animated animate__fadeIn">
        <img src="../assets/auth/dog.png" alt="dog" />
        <Link className="back__home" to="/">
          <i className="fa-solid fa-chevron-left"></i>
          <p>Home</p>
        </Link>
      </div>

      <form className="form animate__animated animate__fadeIn" onSubmit={handleRegister}>
        <h2>Register in Loyal Friend</h2>
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
            type="number"
            placeholder="Phone"
            name="phone"
            autoComplete="off"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Address"
            name="address"
            autoComplete="off"
            value={address}
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
            type="password"
            placeholder="Password"
            name="password1"
            autoComplete="off"
            value={password1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            autoComplete="off"
            value={password2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__submit">
          <button>Register</button>
          <p>
            Already have an account? <Link to="/auth/login">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
