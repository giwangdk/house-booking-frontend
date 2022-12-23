export interface EditProfileProps {
  fullname: string;
  address: string;
  password: string;
  newPassword: string;
}

export interface ErrorEditProfile {
  fullname: string;
  address: string;
  password: string;
  newPassword: string;
}
export interface FormReturnEditProfile<T> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: T;
  errors: ErrorEditProfile | undefined;
  isLoading: boolean;
}
