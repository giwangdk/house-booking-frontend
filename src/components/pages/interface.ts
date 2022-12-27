import { IHouse, IReservation } from '../../helpers/types';

export interface ListCardProps {
  data: IHouse[];
}

export interface TopupProps {
  amount: number | string;
}
export interface ErrorTopup {
  amount: string;
}

export interface ModalTopupProps {
  show: boolean;
}

export interface CardPaymentProps {
  reservation: IReservation;
}
