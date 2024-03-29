import { ErrorRegister, RegisterProps } from '../../../helpers/types';

export default function validateInfo(values: RegisterProps): RegisterProps {
  const errors: ErrorRegister = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  if (!values.name) {
    errors.name = 'Fullname is required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  }else if(values.password !== values.confirmPassword){
    errors.confirmPassword = 'Password do not match';
  }


  return errors;
}
