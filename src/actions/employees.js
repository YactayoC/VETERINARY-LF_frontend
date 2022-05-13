import Swal from 'sweetalert2';
import { fetchNotToken, fetchToken } from '../helpers/fetch';
import { types } from '../types/types';

// Login employee
export const employeeStartLogin = (email, password) => async (dispatch) => {
  return async (dispatch) => {
    const resp = await fetchNotToken('auth/login', { email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      dispatch(
        adminLogin({
          uid: body.uid,
          fullname: body.fullname,
          type: body.type,
        }),
      );
      //dispatch(infoStartLoading());
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

const adminLogin = (user) => ({
  type: types.authLogin,
  payload: user,
});

// Add employees
export const employeeStartAddNew = (employee) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('employee/addEmployee', employee, 'POST');
      const body = await resp.json();
      if (body.ok) {
        Swal.fire('Success', body.msg, 'success');
        dispatch(employeeAddNew(body.employee));
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error', error.msg, 'error');
    }
  };
};

const employeeAddNew = (employee) => ({
  type: types.adminEmployeesAddNew,
  payload: employee,
});

// Update employee
export const employeeStartUpdate = (employee) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken(`employee/updateEmployee/${employee._id}`, employee, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        dispatch(employeeUpdated(body.employee));
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const employeeUpdated = (employee) => ({
  type: types.adminEmployeeUpdated,
  payload: employee,
});

// Active employee
export const employeeStartActive = (employee) => ({
  type: types.adminEmployeeSetActive,
  payload: employee,
});

// Clear employee
export const employeeClearActive = () => ({
  type: types.adminEmployeeClearActive,
});

// Delete employee
export const employeeStartDeleted = (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken(`employee/deleteEmployee/${id}`, {}, 'DELETE');
      const body = await resp.json();

      if (body.ok) {
        dispatch(employeeDeleted(id));
        Swal.fire('Success', body.msg, 'success');
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'There wan an error', 'error');
    }
  };
};

const employeeDeleted = (id) => ({
  type: types.adminEmployeeDeleted,
  payload: id,
});

// Loaded employees
export const employeeStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('employee/getEmployees');
      const body = await resp.json();
      const employees = body.employees;
      dispatch(employeesLoaded(employees));
    } catch (error) {
      Swal.fire('Error', 'There wan an error', 'error');
    }
  };
};

const employeesLoaded = (employees) => ({
  type: types.adminEmployeesLoaded,
  payload: employees,
});
