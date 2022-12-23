import { SyntheticEvent } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { IHouse, IHousePhoto } from '../../helpers/types';
import { InputProps } from '../atoms/interface';

export interface InputLabelProps extends InputProps {
  label: string;
  message?: string | undefined;
}

export interface DropdownProps {
  name?: string;
  value?: string;
  values?: {
    value: string | number;
    label: string;
  }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
