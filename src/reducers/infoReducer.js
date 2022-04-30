import { types } from '../types/types';

const initialState = {
  data: false,
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.infoLoaded:
      return {
        ...state,
        data: true,
        user: action.payload,
      };

    case types.infoLogout:
      return {
        data: false,
      };

    default:
      return state;
  }
};
