import { configureStore } from '@reduxjs/toolkit';
import usesSlice from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usesSlice,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
