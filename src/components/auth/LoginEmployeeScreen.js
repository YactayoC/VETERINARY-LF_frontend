import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { isEmail } from 'validator';

import Swal from 'sweetalert2';
import { employeeStartLogin } from '../../actions/employees';

const initialState = {
  email: '',
  password: '',
};

export const LoginEmployeeScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm(initialState);
  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid() === true) {
      dispatch(employeeStartLogin(email, password));
      Swal.fire({
        title: 'Loading...',
        text: 'Welcome veterinary',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1000,
        willOpen: () => {
          Swal.showLoading();
        },
      });
    }
  };

  const isFormValid = () => {
    if (!isEmail(email)) {
      Swal.fire('Error', 'The email is not valid', 'error');
      return false;
    } else if (password.length === 0) {
      Swal.fire('Error', 'The password is not valid', 'error');
      return false;
    }

    return true;
  };

  return (
    <div className="auth ">
      <div className="auth__img animate__animated animate__fadeIn">
        <img src="../assets/auth/cat.png" alt="cat" />
        <Link className="back__home" to="/">
          <i className="fa-solid fa-chevron-left"></i>
          <p>Home</p>
        </Link>
      </div>

      <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit}>
        <h2 className="form__heading-admin">Login in Loyal Friend</h2>
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
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__submit">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
