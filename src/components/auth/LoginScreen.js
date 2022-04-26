import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
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
        <h2>Login in Loyal Friend</h2>
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
            name="password"
            autoComplete="off"
          />
        </div>
        <div className="form__submit">
          <button>Login</button>
          <p>
            Don't have an account? <Link to="/auth/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
