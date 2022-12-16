import {
  AnyAction,
  CaseReducer,
  createSlice,
  PayloadAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { submitLogin } from '../services/auth.service';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { NavigateFunction } from 'react-router-dom';
import { AuthState, IUser, LoginProps } from '../helpers/types';
import { getUserDetails } from '../services/service';

const cookies = new Cookies();

const initialState: AuthState = {
  user: null,
  isLoggedIn: cookies.get('token') ? true : false,
  isLoading: false,
  error: null,
  isError: false,
};

export type AuthDispatch = ThunkDispatch<AuthState, any, AnyAction>;

const setIsLoadingReducer: CaseReducer<
  typeof initialState,
  PayloadAction<boolean>
> = (state, action) => {
  state.isLoading = action.payload;
};

const setIsErrorReducer: CaseReducer<
  typeof initialState,
  PayloadAction<boolean>
> = (state, action) => {
  state.isError = action.payload;
};

const setIsLoggedInReducer: CaseReducer<
  typeof initialState,
  PayloadAction<boolean>
> = (state, action) => {
  state.isLoggedIn = action.payload;
};

const setErrorReducer: CaseReducer<
  typeof initialState,
  PayloadAction<string>
> = (state, action) => {
  state.error = action.payload;
};

const setUserReducer: CaseReducer<
  typeof initialState,
  PayloadAction<IUser | null>
> = (state, action) => {
  state.user = action.payload;
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsLoading: setIsLoadingReducer,
    setIsError: setIsErrorReducer,
    setIsLoggedIn: setIsLoggedInReducer,
    setError: setErrorReducer,
    setUser: setUserReducer,
  },
});

export const { setIsError, setIsLoading, setIsLoggedIn, setError, setUser } =
  authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;

export const Login =
  (data: LoginProps) =>
  (
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    from: string,
  ): void => {
    dispatch(setIsLoading(true));

    console.log(data);
   submitLogin(data)
      .then((res) => {
        cookies.set('token', res.data.data.access_token, { path: '/', maxAge:20000});
        return res;
      })
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        return res.data;
      })
      .then((data) => {
        dispatch(setUser(data.data.data));
        toast.success('Login Successful');
        navigate(from);
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        toast.error(message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const Logout =
  () =>
  (dispatch: Dispatch<AnyAction>): void => {
    cookies.remove('token', { path: '/' });

    toast.success('Logout Success');
    dispatch(setIsLoggedIn(false));
    dispatch(setUser(null));
  };

export const getUser =
  () =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch(setIsLoading(true));
    await getUserDetails()
      .then((res) => {
        dispatch(setUser(res.data.data));
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch(setIsError(true));
        toast.error(message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
