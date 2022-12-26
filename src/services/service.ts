import { AxiosResponse } from 'axios';
import { IReservation, ITransaction } from '../helpers/types';
import { get, put, getWithSlug, post, getWithoutHeader } from './config';

const API_ACCOUNT = process.env.REACT_APP_ACCOUNT_SERVICES_URL;

export const getUserDetails = get(`${API_ACCOUNT}/user`);
export const getWalletUser = get(`${API_ACCOUNT}/wallet`);
export const getGameUser = get(`${API_ACCOUNT}/game`);
export const getCities = get(`${API_ACCOUNT}/cities`);
export const EditUser = put(`${API_ACCOUNT}/user`);
export const getHouses = getWithSlug(`${API_ACCOUNT}/houses`);
export const getHouseById = (id: string): Promise<any> =>
  get(`${API_ACCOUNT}/house/${id}`)();
export const getReservationByBookingCode = (bookingCode: string): any => {
  return getWithoutHeader(`${API_ACCOUNT}/reservation/${bookingCode}`);
};

export const submitReservation = post<IReservation>(
  `${API_ACCOUNT}/reservation`,
);
export const submitTransaction = post<ITransaction>(
  `${API_ACCOUNT}/transaction`,
);
