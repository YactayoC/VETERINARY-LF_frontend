import { configureStore } from '@reduxjs/toolkit';

import { Auth } from '@/models';
import { authSlice } from './states';

export interface AppStore {
  auth: Auth;
}

export default configureStore<AppStore>({
  reducer: {
    auth: authSlice.reducer,
  },
});
