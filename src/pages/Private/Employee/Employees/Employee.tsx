import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Aside, Data, Item } from '@/components';
import { useEmployee, useModal } from '@/hooks';
import { AppStore } from '@/redux/store';
import { isEmail, isFullname, isPhone, SwalError, SwalSuccess } from '@/utils';
import { Role, User } from '@/models';

const EmployeeWorkerPage = () => {
  const { employees, activeEmployee } = useSelector((state: AppStore) => state.employees);
  const { isOpenModalAddEmployee, isOpenModalUpdateEmployee } = useSelector((state: AppStore) => state.modal);
  const { handleOpenModalAddEmployee, handleOpenModalUpdateEmployee } = useModal();
  const { handleGetEmployees, handleAddEmployee, handleUpdateEmployee, handleSetDataActiveEmployee } = useEmployee();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    handleGetEmployees();
  }, []);

  const onAddEmployee = async (data: User) => {
    data = { ...data, confirmed: true, role: Role.EMPLOYEE, key: null };
    const { hasError, msg } = await handleAddEmployee(data);

    if (hasError) {
      SwalError(msg);
    }

    SwalSuccess('Employee was added', msg);
    handleOpenModalAddEmployee(false);
    reset();
  };

  const onUpdateEmployee = async (data: User) => {
    const { hasError, msg } = await handleUpdateEmployee({ ...activeEmployee, ...data });
    if (hasError) {
      SwalError(msg);
    }

    SwalSuccess('Employee was updated', msg);
    handleOpenModalUpdateEmployee(false);
    reset();
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
            {employees.length >= 1 ? (
              <>
                {employees.map((employee) => (
                  <Item key={employee._id} employee={employee} type="employees" />
                ))}
              </>
            ) : (
              <p className="no-results">No employees found</p>
            )}
          </div>
        </div>
      </div>

      {isOpenModalAddEmployee && (
        <div className={`modal ${!isOpenModalAddEmployee && 'modal__hide'}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Add Employee</h2>
              <i className="fa-solid fa-rectangle-xmark" onClick={() => handleOpenModalAddEmployee(false)}></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onAddEmployee)}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  autoComplete="off"
                  placeholder="Fullname"
                  {...register('fullname', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The fullname must be at least 6 characters long' },
                    validate: isFullname,
                  })}
                />
                {errors.fullname && <p className="error-input">{errors.fullname.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="number"
                  placeholder="Phone"
                  autoComplete="off"
                  {...register('phone', {
                    required: 'This field is required',
                    validate: isPhone,
                  })}
                />
                {errors.phone && <p className="error-input">{errors.phone.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Address"
                  autoComplete="off"
                  {...register('address', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The address must be at least 6 characters long' },
                  })}
                />
                {errors.fullname && <p className="error-input">{errors.fullname.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  {...register('email', { required: 'This field is required', validate: isEmail })}
                />
                {errors.email && <p className="error-input">{errors.email.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...register('password', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The password must be at least 6 characters long' },
                  })}
                />
                {errors.password && <p className="error-input">{errors.password.message}</p>}
              </div>
              <div className="form__submit form__submit-add">
                <button className="form__button">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeEmployee && isOpenModalUpdateEmployee && (
        <div className={`modal ${!isOpenModalUpdateEmployee && 'modal__hide'}`}>
          <div className="modal__info">
            <div className="modal__title">
              <h2>Update Employee</h2>
              <i
                className="fa-solid fa-rectangle-xmark"
                onClick={() => {
                  handleOpenModalUpdateEmployee(false);
                  handleSetDataActiveEmployee(null);
                }}
              ></i>
            </div>
            <form className="form animate__animated animate__fadeIn" onSubmit={handleSubmit(onUpdateEmployee)}>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  autoComplete="off"
                  placeholder="Fullname"
                  defaultValue={activeEmployee.fullname}
                  {...register('fullname', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The fullname must be at least 6 characters long' },
                    validate: isFullname,
                  })}
                />
                {errors.fullname && <p className="error-input">{errors.fullname.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="number"
                  placeholder="Phone"
                  autoComplete="off"
                  defaultValue={activeEmployee?.phone}
                  {...register('phone', {
                    required: 'This field is required',
                    validate: isPhone,
                  })}
                />
                {errors.phone && <p className="error-input">{errors.phone.message}</p>}
              </div>
              <div className="form__group form__add">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Address"
                  autoComplete="off"
                  defaultValue={activeEmployee?.address}
                  {...register('address', {
                    required: 'This field is required',
                    minLength: { value: 6, message: 'The address must be at least 6 characters long' },
                  })}
                />
                {errors.address && <p className="error-input">{errors.address.message}</p>}
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

export default EmployeeWorkerPage;
