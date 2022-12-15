import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './authenticationSlice';

const reducers = {
  auth: authenticationReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
