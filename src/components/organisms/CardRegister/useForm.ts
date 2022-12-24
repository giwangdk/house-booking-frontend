import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsError, setIsLoading } from '../../../redux/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { submitRegister } from '../../../services/auth.service';
import { toast } from 'react-toastify';
import {
  ErrorRegister,
  FormReturnRegister,
  RegisterProps,
} from '../../../helpers/types';
import { ActionMeta, SingleValue } from 'react-select';

function useForm(
  validateInfo: (values: RegisterProps) => RegisterProps,
): FormReturnRegister<RegisterProps> {
  const [values, setValues] = useState<RegisterProps>({
    name: '',
    address: '',
    email: '',
    password: '',
  });
  const [city, setCity] = useState(1);
  const [errors, setErrors] = useState<ErrorRegister>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value);

    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleChangeDropdown = (e: any) => {
    setCity(e.value);
    console.log(city);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);

    const data = {
      fullname: values.name,
      email: values.email,
      password: values.password,
      address: values.address,
      city_id: city,
    };

    if (
      Object.keys(errors?.name || {}).length === 0 &&
      Object.keys(errors?.email || {}).length === 0 &&
      Object.keys(errors?.password || {}).length === 0 &&
      isSubmitting
    ) {
      console.log(data);

      dispatch(setIsLoading(true));
      submitRegister(data)
        .then((res) => {
          console.log(res);

          toast.success('Register Success');
          navigate('/login');
        })
        .catch((err) => {
          dispatch(setIsError(true));
          console.log(err);

          toast.error(err.response.data.message);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    }
  };

  return {
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    values,
    errors,
    city,
  };
}

export default useForm;
