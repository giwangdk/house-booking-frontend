
import { IUser } from '../helpers/types';
import { postWithoutHeader } from './config';

const API_ACCOUNT = process.env.REACT_APP_ACCOUNT_SERVICES_URL;

// Auth
export const submitLogin = postWithoutHeader<IUser>(`${API_ACCOUNT}/login`);
export const submitRegister = postWithoutHeader<IUser>(`${API_ACCOUNT}/register`);
