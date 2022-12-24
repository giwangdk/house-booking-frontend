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
