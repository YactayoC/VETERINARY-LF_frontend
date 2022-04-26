import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth">
      <div className="auth__img">
        <img src="../assets/auth/cat.png" alt="cat" />
        <Link className="back__home" to="/">
          <i className="fa-solid fa-chevron-left"></i>
          <p>Home</p>
        </Link>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register in Loyal Friend</h2>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Fullname"
            name="fullname"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="number"
            placeholder="Phone"
            name="phone"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Address"
            name="address"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            name="password1"
            autoComplete="off"
          />
        </div>
        <div className="form__group">
          <input
            className="form__input"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            autoComplete="off"
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
