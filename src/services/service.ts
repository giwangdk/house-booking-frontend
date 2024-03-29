import { IReservation, ITopup, ITransaction } from '../helpers/types';
import {
  get,
  put,
  getWithSlug,
  post,
  getWithoutHeader,
  postWithoutHeader,
  deleteItem,
} from './config';

const API_ACCOUNT = process.env.REACT_APP_ACCOUNT_SERVICES_URL;

export const getUserDetails = get(`${API_ACCOUNT}/user`);
export const getWalletUser = get(`${API_ACCOUNT}/wallet`);
export const getGameUser = get(`${API_ACCOUNT}/game`);
export const getCities = get(`${API_ACCOUNT}/cities`);
export const getPickupStatus = get(`${API_ACCOUNT}/pickup-status`);
export const EditUser = put(`${API_ACCOUNT}/user`);
export const ChangePassword = put(`${API_ACCOUNT}/change-password`);
export const getHouses = getWithSlug(`${API_ACCOUNT}/houses`);
export const getPickups = getWithSlug(`${API_ACCOUNT}/pickups`);
export const submitUpdatePickupStatus = (id: number): any => {
  return put(`${API_ACCOUNT}/pickup/${id}`);
};
export const getHouseById = (id: string): Promise<any> =>
  get(`${API_ACCOUNT}/house/${id}`)();
export const getReservations = get(`${API_ACCOUNT}/reservations`);
export const getReservationByBookingCode = (bookingCode: string): any => {
  return getWithoutHeader(`${API_ACCOUNT}/reservation/${bookingCode}`);
};
export const getHousesHost = getWithSlug(`${API_ACCOUNT}/host/houses`);
export const getTransactionsGuest = getWithSlug(
  `${API_ACCOUNT}/transactions-guest`,
);
export const submitReservation = postWithoutHeader<IReservation>(
  `${API_ACCOUNT}/reservation`,
);
export const submitTopup = post<ITopup>(`${API_ACCOUNT}/topup`);
export const submitTransaction = postWithoutHeader<ITransaction>(
  `${API_ACCOUNT}/transaction`,
);
export const submitTransactionGuest = (bookingCode: string): any => {
  return post(`${API_ACCOUNT}/guest/transaction/${bookingCode}`);
};
export const submitBecomeHost = post(`${API_ACCOUNT}/host`);
export const submitAddHouse = post(`${API_ACCOUNT}/house`);
export const submitAddHouseDetail = (id: number): any => {
  return post(`${API_ACCOUNT}/house-detail/${id}`);
};
export const submitEditHouse = (id: number): any => {
  return put(`${API_ACCOUNT}/house/${id}`);
};
export const submitDeleteHouse = (id: number): any => {
  return deleteItem(`${API_ACCOUNT}/house/${id}`);
};
export const submitEditHouseDetail = (id: number): any => {
  return put(`${API_ACCOUNT}/house-detail/${id}`);
};
export const submitAddHousePhoto = (id: number): any => {
  return post(`${API_ACCOUNT}/house-photo/${id}`);
};
export const submitDeleteHousePhoto = (id: number): any => {
  return deleteItem(`${API_ACCOUNT}/house-photo/${id}`);
};

export const submitGame = put(`${API_ACCOUNT}/game`);
