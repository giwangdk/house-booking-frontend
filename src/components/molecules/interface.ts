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
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface CardProps {
  children: React.ReactNode;
  className: string;
}

