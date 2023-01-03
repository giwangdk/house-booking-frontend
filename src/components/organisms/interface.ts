import {
  ICity,
  IHouse,
  IHousePhoto,
  IReservation,
  ITransaction,
} from '../../helpers/types';

export interface AuthHeroProps {
  image?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TableProps {
  headers: string[];
  isLoading?: boolean;
  children: React.ReactNode;
}

export interface CoinProps {
  result: string;
  isLoading: boolean;
}

export interface ModalCoinProps {
  handleCloseModal: () => void;
  guess: string;
  result: string;
  show: boolean;
  isWin: boolean;
}

export interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
