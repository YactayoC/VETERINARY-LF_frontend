import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {
  const dispatch = useDispatch();
  const { uid, fullname, type } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleBarPhone = () => {
    const navPhone = document.querySelector('.nav');
    navPhone.classList.toggle('nav-active--phone');
  };

  return (
    <header>
      <nav className="nav">
        <Link to="#">
          <img className="nav__logo" src="../assets/ui/logo.png" alt="logo" />
        </Link>

        <div className="nav__links">
          <NavLink className={({ isActive }) => 'nav__link ' + (isActive && 'nav__link-active')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => 'nav__link ' + (isActive && 'nav__link-active')} to="/services">
            Services
          </NavLink>
          <NavLink className={({ isActive }) => 'nav__link ' + (isActive && 'nav__link-active')} to="/contact">
            Contact
          </NavLink>

          {uid && fullname ? (
            <>
              <Link
                className="nav__link nav__link-user"
                to={type === 'client' ? '/profile/settings' : '/dashboard/appointments'}
              >
                <i className="fa-solid fa-user nav__link-user--on"></i>
                <p>{fullname}</p>
              </Link>
              <Link className="nav__link nav__link-user" to="/auth/login" onClick={handleLogout}>
                <i className="fa-solid fa-power-off nav__link-user--off"></i>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <>
              <Link className="nav__link nav__link-auth" to="/auth/login">
                Log In
              </Link>

              <Link className="nav__link nav__link-auth" to="/auth/register">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* ===============PHONE==================== */}
        <div className="nav__bar" onClick={handleBarPhone}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="nav__links nav__phone">
          <NavLink
            className={({ isActive }) => 'nav__link nav__link--phone ' + (isActive && 'nav__link-active')}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav__link nav__link--phone ' + (isActive && 'nav__link-active')}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav__link nav__link--phone ' + (isActive && 'nav__link-active')}
            to="/contact"
          >
            Contact
          </NavLink>

          {uid && fullname ? (
            <>
              <Link
                className="nav__link nav__link--phone nav__link-user"
                to={type === 'client' ? '/profile/settings' : '/dashboard/appointments'}
              >
                <i className="fa-solid fa-user nav__link-user--on"></i>
                <p>{fullname}</p>
              </Link>

              <Link className="nav__link nav__link--phone nav__link-user" to="/auth/login" onClick={handleLogout}>
                <i className="fa-solid fa-power-off nav__link-user--off"></i>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <>
              {' '}
              <Link className="nav__link nav__link-auth" to="/auth/login">
                Log In
              </Link>
              <Link className="nav__link nav__link-auth" to="/auth/register">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
