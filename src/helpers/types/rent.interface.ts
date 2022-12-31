import { ActionMeta, SingleValue } from 'react-select';

export interface BookingProps {
  name: string;
  email: string;
}

export interface ErrorBooking {
  name: string;
  email: string;
}

export interface FormReturnBooking<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorBooking | undefined;
  handleChangeDropdown: (
    newValue: SingleValue<string | number>,
    actionMeta: ActionMeta<string | number>,
  ) => void;
  city?: number;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setCity: React.Dispatch<React.SetStateAction<number | undefined>>;
  isLoading: boolean;
}
