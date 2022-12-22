import { get, put } from './config';

const API_ACCOUNT = process.env.REACT_APP_ACCOUNT_SERVICES_URL;

export const getUserDetails = get(`${API_ACCOUNT}/user`);
export const getWalletUser = get(`${API_ACCOUNT}/wallet`);
export const EditUser = put(`${API_ACCOUNT}/user`);
