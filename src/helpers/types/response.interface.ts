import { ICity, IHouse, IPickup } from './entity.interface';

export interface IHouseResponse {
  data: {
    houses: IHouse[];
    page: number;
    limit: number;
    total: number;
  };
  message: string;
}
export interface IPickupResponse {
  data: {
    pickups: IPickup[];
    page: number;
    limit: number;
    total: number;
  };
  message: string;
}

export interface ICityResponse {
  data: ICity[];
}

export interface IHouseDetailResponse {
  data: IHouse;
}

export interface IHousesHostResponse {
  data: {
    houses: IHouse[];
    page: number;
    limit: number;
    total: number;
  };
  message: string;
}
