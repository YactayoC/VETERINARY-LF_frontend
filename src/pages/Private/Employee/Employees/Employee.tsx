import { Aside, Data, Item } from '@/components';
import { useEmployee } from '@/hooks';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

const EmployeeWorkerPage = () => {
  const { employees, activeEmployee } = useSelector((state: AppStore) => state.employees);
  const { handleGetEmployees } = useEmployee();

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
                  <Item key={employee._id} {...employee} type="employees" />
                ))}
              </>
            ) : (
              <p className="no-results">No employees found</p>
            )}
          </div>
        </div>
      </div>

      {/* {!activeEmployee ? (
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
      )} */}
    </div>
  );
};

export default EmployeeWorkerPage;
