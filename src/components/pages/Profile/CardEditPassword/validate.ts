import {
  ChangePasswordProps,
  ErrorChangePassword,
} from '../../../../helpers/types';

export default function validateInfo(
  values: ChangePasswordProps,
): ChangePasswordProps {
  const errors: ErrorChangePassword = {
    password: '',
    newPassword: '',
    confirmPassword: '',
  };

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.newPassword) {
    errors.newPassword = 'New Password is required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword = 'Password do not match';
  }
  return errors;
}
