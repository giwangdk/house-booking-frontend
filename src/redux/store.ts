import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './authenticationSlice';
import { houseReducer } from './houseSlice';

const reducers = {
  auth: authenticationReducer,
  house: houseReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
