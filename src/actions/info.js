import { fetchToken } from '../helpers/fetch';
import { types } from '../types/types';

export const infoStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchToken('auth/profile');
      const body = await resp.json();
      dispatch(infoLoaded(body.client));
    } catch (error) {
      console.log(error);
    }
  };
};

const infoLoaded = (data) => ({
  type: types.infoLoaded,
  payload: data,
});

export const infoLogout = () => ({
  type: types.infoLogout,
});
