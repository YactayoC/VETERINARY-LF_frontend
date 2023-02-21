import { useDispatch } from 'react-redux';

import { addEmployeeService, getEmployeeService, removeEmployeeService, updateEmployeeService } from '@/services';
import { addEmployee, loadEmployees, removeEmployee, setDataActiveEmployee, updateEmployee } from '@/redux/states';
import { Employee, User } from '@/models';

export const useEmployee = () => {
  const dispatch = useDispatch();

  const handleGetEmployees = async () => {
    try {
      const dataUsers = await getEmployeeService();
      dispatch(loadEmployees(dataUsers.users));
      return { hasError: false, data: dataUsers };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleAddEmployee = async (employee: User) => {
    try {
      const data = await addEmployeeService(employee);
      dispatch(addEmployee(data.employee));
      return { hasError: false, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleUpdateEmployee = async (employee: User) => {
    try {
      const data = await updateEmployeeService(employee);
      dispatch(updateEmployee(data.employee));
      return { hasError: false, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleRemoveEmployee = async (id: string) => {
    try {
      const data = await removeEmployeeService(id);
      dispatch(removeEmployee(id));
      return { hasError: false, msg: data.msg };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  const handleSetDataActiveEmployee = (dataActiveEmployee: Employee | null) => {
    dispatch(setDataActiveEmployee(dataActiveEmployee));
  };

  return {
    handleGetEmployees,
    handleAddEmployee,
    handleUpdateEmployee,
    handleSetDataActiveEmployee,
    handleRemoveEmployee,
  };
};
