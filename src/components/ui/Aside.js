import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Aside = () => {
  const dispatch = useDispatch();
  const { fullname } = useSelector((state) => state.auth);
  const width = document.documentElement.scrollWidth;

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (width >= 480) {
      const aside = document.querySelector('.aside');
      aside.classList.add('aside-show');
      return;
    }
  }, [width]);

  const handleBar = () => {
    const aside = document.querySelector('.aside');
    if (aside.classList.contains('aside-show')) {
      aside.classList.remove('aside-show');
    } else {
      aside.classList.add('aside-show');
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
  };

  return (
    <aside className="aside">
      <div className="aside__icons">
        <i className="fa-solid fa-bars aside__hamburger" onClick={handleBar}></i>
        <NavLink to="/">
          <i className="fa-solid fa-house aside__hamburger aside__hamburger-home"></i>
        </NavLink>
      </div>

      <div className="aside__title">
        <h2 className={pathname.includes('dashboard') ? 'aside__title-text-admin' : 'aside__title-text'}>
          LoyalFriend
        </h2>
      </div>
      <nav className="aside__nav">
        <div className="aside__profile">
          <img src="../assets/ui/user.webp" alt="img" />
          <h3>{fullname}</h3>
        </div>
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={pathname.includes('dashboard') ? '/dashboard/appointments' : '/profile/appointments'}
        >
          <i className="fa-solid fa-calendar-check"></i>
          <p>Appointments</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={pathname.includes('dashboard') ? '/dashboard/testimonials' : '/profile/testimonial'}
        >
          <i className="fa-solid fa-pen-to-square"></i>
          <p>Testimonials</p>
        </NavLink>
        {pathname.includes('dashboard') && (
          <NavLink
            className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
            to={pathname.includes('dashboard') && '/dashboard/employees'}
          >
            <i className="fa-solid fa-users"></i>
            <p>Employees</p>
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={pathname.includes('dashboard') ? '/dashboard/settings' : '/profile/settings'}
        >
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to="/login"
          onClick={handleLogout}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Logout</p>
        </NavLink>
      </nav>
    </aside>
  );
};
