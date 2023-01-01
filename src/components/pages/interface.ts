import {
  ICity,
  IHouse,
  IHousePhoto,
  IPickup,
  IReservation,
} from '../../helpers/types';

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
  handleCloseModal: () => void;
}

export interface CardPaymentProps {
  reservation: IReservation;
}

export interface CardProfileProps {
  src?: string;
  name?: string;
}

export interface CardWalletProps {
  id?: string;
  balance?: number;
}

export interface CardDetailProfileProps {
  fullname?: string;
  email?: string;
  address?: string;
  city?: ICity;
}

export interface CardDetailProfileItemProps {
  label?: string;
  item?: string;
}

export interface CardEditDetailProfileProps {
  handleCloseEdit: () => void;
}

export interface FormTopupReturn<T, T2> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCloseModal: () => void;
  show: boolean;
  isLoading: boolean;
  values: T;
  errors: T2 | undefined;
  errorsMsg: string | undefined;
  handleShowModal: () => void;
}

export interface ModalPaymentProps {
  handleCloseModal: () => void;
  show: boolean;
  reservation: IReservation;
}

export interface BecomeHostProps {
  handleCloseModal: () => void;
  show: boolean;
}

export interface TableHousesProps {
  houses: IHouse[];
  isLoading: boolean;
}

export interface TablePickupsProps {
  pickups: IPickup[];
  isLoading: boolean;
}
export interface TableHousePhotos {
  photos: IHousePhoto[];
  isLoading: boolean;
}

export interface CardEditHouseProps {
  handleClose: () => void;
  house?: IHouse;
}

export interface ModalAddProps {
  handleCloseModal: () => void;
  show: boolean;
  house?: IHouse;
}

export interface ModalEditProps {
  handleCloseModal: () => void;
  show: boolean;
  pickup?: IPickup;
}

export interface ModalWarningProps {
  handleCloseModal: () => void;
  show: boolean;
  handleExitModal: () => void;
}
