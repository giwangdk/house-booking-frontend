import {
  BookingProps,
  ErrorBooking,
} from '../../../../helpers/types/rent.interface';

export default function validateInfo(values: BookingProps): BookingProps {
  const errors: ErrorBooking = {
    name: '',
    email: '',
  };

  if (!values.name) {
    errors.name = 'Fullname is required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  return errors;
}
