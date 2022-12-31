import { IHouse } from './entity.interface';

export interface HouseState {
  house: IHouse | null;
  currentPrice: number;
  totalPrice: number;
  pickupPrice: number;
  isReqPickup: boolean;
}
