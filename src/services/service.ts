import { get } from './config';

const API_ACCOUNT = process.env.REACT_APP_ACCOUNT_SERVICES_URL;


export const getUserDetails = get(`${API_ACCOUNT}/user`);

