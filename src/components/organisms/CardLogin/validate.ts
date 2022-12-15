import { LoginProps } from "../../../helpers/types";


export default function validateInfo(values: LoginProps): LoginProps {
  const errors: LoginProps = {
    email: '',
    password: '',
  };

  if (!values.email) {
    errors.email = 'Email required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
}
