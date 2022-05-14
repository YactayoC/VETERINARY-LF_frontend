import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeInfoStartUpdate, infoStartUpdate } from '../../actions/info';
import { useForm } from '../../hooks/useForm';
import { Aside } from '../ui/Aside';
import { Loading } from '../ui/Loading';

const initialState = {
  fullname: '',
  phone: '',
  email: '',
  addres: '',
  password: '',
};

export const AdminSetting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.info);
  const { uid } = useSelector((state) => state.auth);
  const [formValues, handleInputChange, setImperativeValues] = useForm(initialState);
  const { fullname, phone, address, email, password } = formValues;

  useEffect(() => {
    if (!user) return;
    setImperativeValues(user);
    // eslint-disable-next-line
  }, [user]);

  if (!user) {
    return <Loading />;
  }

  const { fullname: fullnameUser } = user;
  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    dispatch(employeeInfoStartUpdate(formValues));
  };

  return (
    <div className="appointment">
      <Aside />
      <div className="profile-data animate__animated animate__fadeIn">
        <div className="profile-data__general">
          <div>
            <i className="fa-solid fa-gear"></i>
            <h3>Settings</h3>
          </div>
          <button data-id={uid} onClick={handleUpdateEmployee}>
            <i className="fa-solid fa-pen-clip"></i>
            <p>Update Data</p>
          </button>
        </div>

        <div className="profile-data__table">
          <div className="profile-data__img">
            <img src="../assets/ui/user.webp" alt="profile" />
            <h3>{fullnameUser}</h3>
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
                  defaultValue={fullname}
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
                  defaultValue={phone}
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
                  defaultValue={address}
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
                  defaultValue={email}
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
                  defaultValue={password}
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
