import { SyntheticEvent } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import {
  ActionMeta,
  GroupBase,
  OptionsOrGroups,
  SingleValue,
} from 'react-select';
import { IHouse, IHousePhoto } from '../../helpers/types';
import { InputProps } from '../atoms/interface';

export interface InputLabelProps extends InputProps {
  label: string;
  message?: string | undefined;
}

export interface DropdownProps {
  name?: string;
  value?: string | number;
  values?: OptionsOrGroups<string, GroupBase<string>>;
  onChange?: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
}

export interface SearchProps {
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface CalendarProps {
  onChange: (ranges: any) => void;
  state: {
    startDate: Date;
    endDate: Date;
    key: string;
  }[];
}

export interface DetailHouseProps {
  house: IHouse;
  currentPrice?: number | null;
  totalPrice?: number | null;
  isReqPickup?: boolean;
  pickupPrice?: number | null;
}

export interface FormBookingProps {
  currentPrice?: number | null;
  house?: IHouse;
  totalPrice?: number | null;
  isReqPickup: boolean;
  pickupPrice?: number | null;
  handlePickupPrice?: (val: number, isPickup: boolean) => void;
}

export interface CarouselProps {
  photos: IHousePhoto[];
}

export interface InputDateProps extends ReactDatePickerProps {
  label: string;
}

export interface SearchBarProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface InputRadioProps {
  isPickup?: boolean;
  handlePickup?: (e: SyntheticEvent) => void;
  label?: string;
  onClick?: () => void;
}

export interface InputPickupProps {
  house?: IHouse;
  city?: number;
  pickupPrice?: number | null;
  isReqPickup?: boolean;
  handlePickupPrice: (val: number, isPickup: boolean) => void;
}

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  className?: string;
}

export interface InputUploadProps {
  name?: string;
  value?: string | Blob;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MenuProfileProps {
  show: boolean;
  handleCloseMenu?: () => void;
  className?: string;
}
