export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'primary__outline' |  'secondary' | 'secondary__outline' | 'tertiary' | 'tertiary__outline'| 'danger' | 'success';
    border?: 'default'|'rounded'| 'pill';
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    disabled?: boolean;
  }
  
  export interface ErrorProps {
    message: string | null;
  }
  
  export interface InputProps {
    type: 'text' | 'number' | 'email' | 'password';
    name: string;
    errors?: string | null;
    placeholder?: string;
    value: string | number | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
  }
  