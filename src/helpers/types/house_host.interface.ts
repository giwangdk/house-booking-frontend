import { ActionMeta, SingleValue } from 'react-select';

export interface AddHouseProps {
  name: string;
  price: number | string;
  description?: string;
  location?: string;
  city_id?: number | string;
}
export interface FormReturnAddHouseProfile<T> {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  handleChangeDropdown: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
  setCity: React.Dispatch<React.SetStateAction<number | undefined>>;
  isLoading: boolean;
  city?: number;
  errors: ErrorAddHouseProfile | undefined;
}

export interface ErrorAddHouseProfile {
  name: string;
  price: string;
  city: string;
}

export interface EditHouseProfileProps {
  name: string;
  price: number;
  description?: string;
  location?: string;
  city_id?: number;
}
export interface FormReturnEditHouseProfile<T> {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  handleChangeDropdown: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
  setCity: React.Dispatch<React.SetStateAction<number | undefined>>;
  isLoading: boolean;
  city?: number;
}

export interface EditHouseDetailProps {
  max_guest: number;
  bedrooms: number;
  baths: number;
  beds: number;
}
export interface ErrorEditHouseDetail {
  name: string;
  price: string;
  city: string;
}
export interface FormReturnEditHouseDetail<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  isLoading: boolean;
}
