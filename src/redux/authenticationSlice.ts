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
import { AuthState, IGame, IUser, IWallet, LoginProps } from '../helpers/types';
import { getUserDetails, getWalletUser } from '../services/service';

const cookies = new Cookies();

const initialState: AuthState = {
  user: null,
  wallet: null,
  game: null,
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

const setWalletReducer: CaseReducer<
  typeof initialState,
  PayloadAction<IWallet | null>
> = (state, action) => {
  state.wallet = action.payload;
};

const setGameReducer: CaseReducer<
  typeof initialState,
  PayloadAction<IGame | null>
> = (state, action) => {
  state.game = action.payload;
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
    setWallet: setWalletReducer,
    setGame: setGameReducer,
  },
});

export const {
  setIsError,
  setIsLoading,
  setIsLoggedIn,
  setError,
  setUser,
  setWallet,
  setGame,
} = authenticationSlice.actions;
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
        cookies.set('token', res.data.data.access_token, {
          path: '/',
          maxAge: 210000,
        });
        return res;
      })
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        return res.data;
      })
      .then((data) => {
        dispatch(setUser(data.data.data));
        toast.success('Login Successful');
        navigate('/profile');
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
