import { ErrorTopup, TopupProps } from '../../pages/interface';

export default function validateInfo(values: TopupProps): ErrorTopup {
  const errors: ErrorTopup = {
    amount: '',
  };

  if (!values.amount) {
    errors.amount = 'Amount is required';
  } else if (values.amount < 50000) {
    errors.amount = 'Minimum amount is Rp 50.000';
  } else if (values.amount > 10000000) {
    errors.amount = 'Maximum amount is Rp 10.000.000';
  }

  return errors;
}
