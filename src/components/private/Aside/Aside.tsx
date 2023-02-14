import { useAuth } from '@/hooks';
import { PrivateRoutesClient, PrivateRoutesEmployee, PublicRoutes } from '@/models';
import { AppStore } from '@/redux/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

const Aside = () => {
  const { fullname } = useSelector((state: AppStore) => state.auth);
  const { handleLogout } = useAuth();
  const [showNavbarExtended, setShowNavbarExtended] = useState(false);
  const { pathname } = useLocation();

  return (
    <aside className={`aside ${showNavbarExtended && 'aside-show'}`}>
      <div className="aside__icons">
        <i className="fa-solid fa-bars aside__hamburger" onClick={() => setShowNavbarExtended(!showNavbarExtended)}></i>
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
          <img src="/assets/ui/user.webp" alt="img" />
          <h3>{fullname}</h3>
        </div>
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={
            pathname.includes('dashboard')
              ? `/${PrivateRoutesEmployee.LINK_APPOINTMENTS}`
              : `/${PrivateRoutesClient.LINK_APPOINTMENTS}`
          }
        >
          <i className="fa-solid fa-calendar-check"></i>
          <p>Appointments</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={
            pathname.includes('dashboard')
              ? `/${PrivateRoutesEmployee.LINK_TESTIMONIALS}`
              : `/${PrivateRoutesClient.LINK_TESTIMONIALS}`
          }
        >
          <i className="fa-solid fa-pen-to-square"></i>
          <p>Testimonials</p>
        </NavLink>
        {pathname.includes('dashboard') && (
          <NavLink
            className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
            to={pathname.includes('dashboard') ? `/${PrivateRoutesEmployee.LINK_EMPLOYEES}` : '/'}
          >
            <i className="fa-solid fa-users"></i>
            <p>Employees</p>
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={
            pathname.includes('dashboard')
              ? `/${PrivateRoutesEmployee.PROFILE}`
              : `/${PrivateRoutesClient.LINK_PROFILE}`
          }
        >
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => 'aside__nav-link ' + (isActive && 'aside__nav-link--active')}
          to={`/${PublicRoutes.LOGIN}`}
          onClick={handleLogout}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Logout</p>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
