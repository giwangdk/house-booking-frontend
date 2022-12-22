import { IHouse } from './entity.interface';

export interface IHouseResponse {
  data: {
    houses: IHouse[];
    page: number;
    limit: number;
    total: number;
  };
  message: string;
}

export interface IHouseDetailResponse {
  data: IHouse;
}
