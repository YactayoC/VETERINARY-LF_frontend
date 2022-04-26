import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const handleLogout = () => {};

  return (
    <header>
      <nav className="nav">
        <Link to="#">
          <img className="nav__logo" src="../assets/ui/logo.png" alt="logo" />
        </Link>

        <div className="nav__bar">
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="nav__links">
          <NavLink
            className={({ isActive }) =>
              "nav__link " + (isActive && "nav__link-active")
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__link " + (isActive && "nav__link-active")
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__link " + (isActive && "nav__link-active")
            }
            to="/contact"
          >
            Contact
          </NavLink>

          <Link className="nav__link nav__link-user" to="/profile/settings">
            <i className="fa-solid fa-user nav__link-user--on"></i>
            <p>Sebastian Yactayo</p>
          </Link>

          <Link
            className="nav__link nav__link-user"
            to="/auth/login"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-power-off nav__link-user--off"></i>
            <p>Logout</p>
          </Link>

          {/* <Link className="nav__link nav__link-auth" to="/auth/login">
            Log In
          </Link>

          <Link className="nav__link nav__link-auth" to="/auth/register">
            Sign Up
          </Link> */}
        </div>
      </nav>
    </header>
  );
};
