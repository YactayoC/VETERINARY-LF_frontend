import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { PrivateRoutesClient, PrivateRoutesEmployee, PublicRoutes } from '@/models';
import { AppStore } from '@/redux/store';
import { useState } from 'react';

const Navbar = () => {
  const { fullname, role, _id } = useSelector((state: AppStore) => state.auth.client);
  const [activeBarPhone, setActiveBarPhone] = useState(false);
  const { handleLogout } = useAuth();

  const onLogout = () => {
    handleLogout();
  };

  return (
    <header>
      <nav className={`nav ${activeBarPhone ? 'nav-active--phone' : ''}`}>
        <Link to="#">
          <img className="nav__logo" src="/assets/ui/logo.png" alt="logo" />
        </Link>

        <div className="nav__links">
          <NavLink className={({ isActive }) => 'nav__link ' + (isActive && 'nav__link-active')} to={PublicRoutes.HOME}>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav__link ' + (isActive && 'nav__link-active')}
            to={`/${PublicRoutes.SERVICES}`}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav__link ' + (isActive && 'nav__link-active')}
            to={`/${PublicRoutes.CONTACT}`}
          >
            Contact
          </NavLink>

          {_id && fullname ? (
            <>
              <Link
                className="nav__link nav__link-user"
                to={
                  role === 'client'
                    ? `/${PrivateRoutesClient.LINK_APPOINTMENTS}`
                    : `/${PrivateRoutesEmployee.LINK_APPOINTMENTS}`
                }
              >
                <i className="fa-solid fa-user nav__link-user--on"></i>
                <p>{fullname}</p>
              </Link>
              <Link className="nav__link nav__link-user" to={`/${PublicRoutes.LOGIN}`} onClick={onLogout}>
                <i className="fa-solid fa-power-off nav__link-user--off"></i>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <>
              <Link className="nav__link nav__link-auth" to={`/${PublicRoutes.LOGIN}`}>
                Log In
              </Link>

              <Link className="nav__link nav__link-auth" to={`/${PublicRoutes.REGISTER}`}>
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* ===============PHONE==================== */}
        <div className="nav__bar" onClick={() => setActiveBarPhone(!activeBarPhone)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="nav__links nav__phone">
          <NavLink
            className={({ isActive }) => 'nav__link nav__link--phone ' + (isActive && 'nav__link-active')}
            to={PublicRoutes.HOME}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav__link nav__link--phone ' + (isActive && 'nav__link-active')}
            to={`/${PublicRoutes.SERVICES}`}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav__link nav__link--phone ' + (isActive && 'nav__link-active')}
            to={`/${PublicRoutes.CONTACT}`}
          >
            Contact
          </NavLink>

          {_id && fullname ? (
            <>
              <Link
                className="nav__link nav__link--phone nav__link-user"
                to={
                  role === 'client' ? `/${PrivateRoutesClient.APPOINTMENTS}` : `/${PrivateRoutesEmployee.APPOINTMENTS}`
                }
              >
                <i className="fa-solid fa-user nav__link-user--on"></i>
                <p>{fullname}</p>
              </Link>

              <Link
                className="nav__link nav__link--phone nav__link-user"
                to={`/${PublicRoutes.LOGIN}`}
                onClick={onLogout}
              >
                <i className="fa-solid fa-power-off nav__link-user--off"></i>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <>
              <Link className="nav__link nav__link-auth" to={`/${PublicRoutes.LOGIN}`}>
                Log In
              </Link>
              <Link className="nav__link nav__link-auth" to={`/${PublicRoutes.REGISTER}`}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
