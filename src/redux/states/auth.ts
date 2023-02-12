import { createSlice } from '@reduxjs/toolkit';

import { LocalStorageTypes, Auth } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utils';

const initialState: Auth = {
  ok: false,
  uid: '',
  fullname: '',
  type: 'user',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: getLocalStorage(LocalStorageTypes.AUTH)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.AUTH) as string)
    : initialState,

  reducers: {
    login: (state, action) => {
      setLocalStorage(LocalStorageTypes.AUTH, action.payload);
      return action.payload;
    },
    register: (state, action) => {
      return state;
    },
  },
});

export const { login, register } = authSlice.actions;
