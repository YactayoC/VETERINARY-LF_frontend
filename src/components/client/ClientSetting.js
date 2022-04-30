import React, { useState } from 'react';
import { Aside } from '../ui/Aside';
import { useSelector } from 'react-redux';

export const ClientSetting = () => {
  const { user } = useSelector((state) => state.info);
  const { auth } = useSelector((state) => state);

  const [formValues, setFormValues] = useState(user);
  const { fullname, phone, address, email, password } = user;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return (
    <div className="appointment">
      <Aside />
      <div className="profile-data animate__animated animate__fadeIn">
        <div className="profile-data__general">
          <div>
            <i className="fa-solid fa-gear"></i>
            <h3>Profile</h3>
          </div>
          <button>
            <i className="fa-solid fa-pen-clip"></i>
            <p>Update Data</p>
          </button>
        </div>

        <div className="profile-data__table">
          <div className="profile-data__img">
            <img src="../assets/ui/profile.webp" alt="profile" />
            <h3>{auth.fullname}</h3>
          </div>
          <div className="profile-data__form">
            <form className="form-profile animate__animated animate__fadeIn">
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Fullame"
                  name="fullname"
                  autoComplete="off"
                  value={fullname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  autoComplete="off"
                  value={phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__profile">
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
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  disabled
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__profile">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="off"
                  disabled
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
