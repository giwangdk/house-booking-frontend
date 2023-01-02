import React, { SyntheticEvent } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import {
  ActionMeta,
  GroupBase,
  OptionsOrGroups,
  PropsValue,
  SingleValue,
} from 'react-select';
import { IHouse, IHousePhoto, IReservation } from '../../helpers/types';
import { InputProps } from '../atoms/interface';

export interface InputLabelProps extends InputProps {
  label: string;
  message?: string | undefined;
}

export interface DropdownProps {
  name?: string;
  value?: PropsValue<string | number> | undefined;
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
  onClick?: () => void;
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

export interface CardReservationProps {
  reservation: IReservation;
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

export interface SortAndFilterBarProps {
  handleSort?: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
  handleSortBy?: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
  valueSort?: string;
  valueSortBy?: string;
}

export interface InputRadioProps {
  isPickup?: boolean;
  handlePickup?: (e: SyntheticEvent) => void;
  label?: string;
  onClick?: () => void;
}

export interface InputPickupProps {
  city: number;
}

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  className?: string;
}

export interface InputUploadProps {
  name?: string;
  value?: File;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MenuProfileProps {
  show: boolean;
  handleCloseMenu?: () => void;
  className?: string;
}

export interface MenuItemProps {
  icon?: React.ReactNode;
  path: string;
  label?: string;
}
export interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export interface SidebarProps {
  menu: {
    icon: React.ReactNode;
    path: string;
    label: string;
  }[];
}
