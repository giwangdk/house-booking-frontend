import { get, put, getWithSlug } from './config';

const API_ACCOUNT = process.env.REACT_APP_ACCOUNT_SERVICES_URL;

export const getUserDetails = get(`${API_ACCOUNT}/user`);
export const getWalletUser = get(`${API_ACCOUNT}/wallet`);
export const getGameUser = get(`${API_ACCOUNT}/game`);
export const EditUser = put(`${API_ACCOUNT}/user`);
export const getHouses = getWithSlug(`${API_ACCOUNT}/houses`);
export const getHouseById = (id: string): Promise<any> =>
  get(`${API_ACCOUNT}/house/${id}`)();
