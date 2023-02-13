import { useAuth } from '@/hooks';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { fullname, role, uid } = useSelector((state: AppStore) => state.auth);
  const { handleLogout } = useAuth();

  const onLogout = () => {
    handleLogout();
  };

  const onBarPhone = () => {
    const navPhone = document.querySelector('.nav');
    navPhone!.classList.toggle('nav-active--phone');
  };

  return (
    <header>
      <nav className="nav">
        <Link to="#">
          <img className="nav__logo" src="/assets/ui/logo.png" alt="logo" />
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
                to={role === 'client' ? '/profile/settings' : '/dashboard/appointments'}
              >
                <i className="fa-solid fa-user nav__link-user--on"></i>
                <p>{fullname}</p>
              </Link>
              <Link className="nav__link nav__link-user" to="/auth/login" onClick={onLogout}>
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
        <div className="nav__bar" onClick={onBarPhone}>
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
                to={role === 'client' ? '/profile/settings' : '/dashboard/appointments'}
              >
                <i className="fa-solid fa-user nav__link-user--on"></i>
                <p>{fullname}</p>
              </Link>

              <Link className="nav__link nav__link--phone nav__link-user" to="/auth/login" onClick={onLogout}>
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
      </nav>
    </header>
  );
};

export default Navbar;
