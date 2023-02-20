import { createSlice } from '@reduxjs/toolkit';

import { LocalStorageTypes, Auth } from '@/models';
import { setLocalStorage, clearLocalStorage } from '@/utils';
import { Role } from '@/models/role';

const initialState: Auth = {
  user: {
    _id: '',
    fullname: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    key: null,
    confirmed: false,
    role: Role.NONE,
  },
  token: localStorage.getItem(LocalStorageTypes.TOKEN) || '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      setLocalStorage(LocalStorageTypes.TOKEN, action.payload.token);
      return { ...state, ...action.payload };
    },
    register: (state) => {
      return state;
    },
    logout: () => {
      clearLocalStorage();
      return initialState;
    },
    revalidateAuth: (state, action) => {
      setLocalStorage(LocalStorageTypes.TOKEN, action.payload.token);
      return { ...state, ...action.payload };
    },
    updateAuth: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, register, logout, revalidateAuth, updateAuth } = authSlice.actions;
