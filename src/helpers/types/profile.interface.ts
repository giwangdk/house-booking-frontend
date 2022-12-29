export interface ChangePasswordProps {
  password: string;
  newPassword: string;
}

export interface ErrorChangePassword {
  password: string;
  newPassword: string;
}
export interface FormReturnChangePassword<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorChangePassword | undefined;
  isLoading: boolean;
}

export interface EditProfileProps {
  fullname: string;
  address: string;
}

export interface ErrorEditProfile {
  fullname: string;
  address: string;
}
export interface FormReturnEditProfile<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorEditProfile | undefined;
  isLoading: boolean;
}
