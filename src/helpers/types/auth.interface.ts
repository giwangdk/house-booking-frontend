import React from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import { IGame, IUser, IWallet } from './entity.interface';

export interface AuthState {
  user: IUser | null;
  wallet: IWallet | null;
  game: IGame | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  isError: boolean;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface ErrorLogin {
  email: string;
  password: string;
}

export interface FormReturnLogin<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorLogin | undefined;
}

export interface RegisterProps {
  name: string;
  email: string;
  address?: string;
  password: string;
}

export interface ErrorRegister {
  name: string;
  email: string;
  password: string;
}

export interface FormReturnRegister<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorRegister | undefined;
  handleChangeDropdown: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
  city?: number;
}
