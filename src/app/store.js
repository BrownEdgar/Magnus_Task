import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/data/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
