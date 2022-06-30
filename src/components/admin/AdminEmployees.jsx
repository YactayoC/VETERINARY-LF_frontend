import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  employeeClearActive,
  employeeStartAddNew,
  employeeStartLoading,
  employeeStartUpdate,
} from '../../actions/employees';
import { useForm } from '../../hooks/useForm';
import { Aside } from '../ui/Aside';
import { Data } from '../ui/Data';

import { isEmail, isMobilePhone } from 'validator';
import Swal from 'sweetalert2';
import { Item } from '../ui/Item';

const initialState = {
  fullname: '',
  email: '',
  phone: '',
  address: '',
  password: '',
};

const initialState2 = {
  fullname: '',
  phone: '',
  address: '',
};

export const AdminEmployees = () => {
  const dispatch = useDispatch();
  const { data, employees } = useSelector((state) => state.employees);
  const { activeEmployee } = useSelector((state) => state.employees);

  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { fullname, email, password, phone, address } = formValues;

  const [formValuesUpdate, handleInputChangeUpdate, setImperativeValues] = useForm(initialState2);

  useEffect(() => {
    dispatch(employeeStartLoading());
    if (!activeEmployee) return;
    setImperativeValues(activeEmployee);
    // eslint-disable-next-line
  }, [dispatch, activeEmployee]);

  const handleCloseModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal__hide');
    dispatch(employeeClearActive());
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(employeeStartAddNew(formValues));
      handleCloseModal();
      reset(initialState);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (isFormValidUpdate()) {
      dispatch(employeeStartUpdate(formValuesUpdate));
      handleCloseModal();
      reset(initialState);
    }
  };

  const isFormValid = () => {
    if (fullname.length < 3) {
      Swal.fire('Error', 'The name must be at least 3 characters long', 'error');
      return false;
    } else if (!isMobilePhone(phone, ['es-PE'])) {
      Swal.fire('Error', 'The number does not belong to Peru', 'error');
      return false;
    } else if (address.length < 5) {
      Swal.fire('Error', 'The address must be at least 5 characters long', 'error');
      return false;
    } else if (!isEmail(email)) {
      Swal.fire('Error', 'The email is not valid', 'error');
      return false;
    } else if (password.length < 6) {
      Swal.fire('Error', 'Password must be longer than 6 characters.', 'error');
      return false;
    }

    return true;
  };

  const isFormValidUpdate = () => {
    if (formValuesUpdate.fullname.length < 3) {
      Swal.fire('Error', 'The name must be at least 3 characters long', 'error');
      return false;
    } else if (!isMobilePhone(formValuesUpdate.phone, ['es-PE'])) {
      Swal.fire('Error', 'The number does not belong to Peru', 'error');
      return false;
    } else if (formValuesUpdate.address.length < 5) {
      Swal.fire('Error', 'The address must be at least 5 characters long', 'error');
      return false;
    }

    return true;
  };

  return (
    <div className="appointment">
      <Aside />

      <div className="data animate__animated animate__fadeIn">
        <Data title="Employees" button="Add Employee" />

        <div className="appoitment-data__table">
          <div className="appointment-data__datas">
            <ul className="employee-data__datas-header employee-data__datas-header-admin">
              <li className="appointment-data__datas-element">Fullname</li>
              <li className="appointment-data__datas-element">Phone</li>
              <li className="appointment-data__datas-element">Email</li>
              <li className="appointment-data__datas-element">Address</li>
              <li className="appointment-data__datas-element">Edit</li>
              <li className="appointment-data__datas-element">Remove</li>
            </ul>
            {data && employees.length >= 1 ? (
              <>
                {employees.map((employee) => (
                  <Item key={employee._id} {...employee} type="employees" />
                ))}
              </>
            ) : (
              <p className="no-results">No employees found</p>
            )}
          </div>
        </div>
      </div>

      {!Boolean(activeEmployee) ? (
        <div className="modal modal__hide">
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Employee</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleAdd}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  name="fullname"
                  autoComplete="off"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                  value={phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  name="address"
                  placeholder="Address"
                  autoComplete="off"
                  value={address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__submit form__submit-add">
                <button className="form__button">Add</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="modal modal__hide">
          <div className="modal__info">
            <div className="modal__title">
              <h2>Update Employee</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={handleCloseModal}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleUpdate}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  name="fullname"
                  autoComplete="off"
                  placeholder="Fullname"
                  value={formValuesUpdate.fullname}
                  onChange={handleInputChangeUpdate}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="off"
                  value={formValuesUpdate.phone}
                  onChange={handleInputChangeUpdate}
                />
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  name="address"
                  placeholder="Address"
                  autoComplete="off"
                  value={formValuesUpdate.address}
                  onChange={handleInputChangeUpdate}
                />
              </div>
              <div className="form__submit form__submit-add">
                <button className="form__button">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
