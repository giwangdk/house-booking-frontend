import { IUser } from "./entity.interface";

export interface AuthState{
    user: IUser | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null;
    isError: boolean;
}

export interface LoginProps{
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
