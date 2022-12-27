import { ICity } from '../../helpers/types';

export interface AuthHeroProps {
  image?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TableProps {
  headers: string[];
  isLoading: boolean;
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
