import {
  AddHouseProps,
  ErrorAddHouseProfile,
} from '../../../../helpers/types/house_host.interface';

export default function validateInfo(
  values: AddHouseProps,
): ErrorAddHouseProfile {
  const errors: ErrorAddHouseProfile = {
    name: '',
    price: '',
    city: '',
  };

  if (!values.name) {
    errors.name = 'House name is required';
  }

  if (!values.city_id) {
    errors.city = 'House city required';
  }

  if (!values.price) {
    errors.price = 'Price of house is required';
  }

  return errors;
}
