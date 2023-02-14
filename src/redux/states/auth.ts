import { createSlice } from '@reduxjs/toolkit';

import { LocalStorageTypes, Auth } from '@/models';
import { setLocalStorage, clearLocalStorage } from '@/utils';
import { Role } from '@/models/role';

const initialState: Auth = {
  uid: '',
  fullname: '',
  role: Role.NONE,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      setLocalStorage(LocalStorageTypes.TOKEN, action.payload.token);
      return action.payload;
    },
    register: (state, action) => {
      return state;
    },
    logout: () => {
      clearLocalStorage();
      return initialState;
    },
    revalidateAuth: (state, action) => {
      setLocalStorage(LocalStorageTypes.TOKEN, action.payload.token);
      return action.payload;
    },
  },
});

export const { login, register, logout, revalidateAuth } = authSlice.actions;
