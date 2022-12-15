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

