import { AuthRegister } from '@/models';
import { updateAuth } from '@/redux';
import { updateProfileService } from '@/services';
import { useDispatch } from 'react-redux';

export const useProfile = () => {
  const dispatch = useDispatch();

  const handleAuthUpdate = async (dataLogin: AuthRegister) => {
    try {
      const dataAuth = await updateProfileService(dataLogin);
      dispatch(updateAuth(dataAuth));
      return { hasError: false, data: dataAuth, msg: dataAuth.msg };
    } catch (error) {
      return { hasError: true, errorMessage: error.response.data.msg };
    }
  };

  return { handleAuthUpdate };
};
