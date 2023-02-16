import { useDispatch } from 'react-redux';

import { getEmployees } from '@/redux/states';
import { getEmployeesService } from '@/services';

export const useEmployee = () => {
  const dispath = useDispatch();

  const handleGetEmployees = async () => {
    try {
      const data = await getEmployeesService();
      dispath(getEmployees(data));
      return { hasError: false, employees: data };
    } catch (error) {
      return { hasError: true, msg: error.response.data.msg };
    }
  };

  return { handleGetEmployees };
};
