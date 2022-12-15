import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsError, setIsLoading } from '../../../redux/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { submitRegister } from '../../../services/auth.service';
import { toast } from 'react-toastify';
import { ErrorRegister, FormReturnRegister, RegisterProps } from '../../../helpers/types';

function useForm(
  validateInfo: (values: RegisterProps) => RegisterProps,
): FormReturnRegister<RegisterProps> {
  const [values, setValues] = useState<RegisterProps>({
    name: '',
    address: '',
    city: '1',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorRegister>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
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
      city_id: parseInt(values.city),
    };

    if (
      Object.keys(errors?.name || {}).length === 0 &&
      Object.keys(errors?.email || {}).length === 0 &&
      Object.keys(errors?.password || {}).length === 0 &&
      Object.keys(errors?.city || {}).length === 0 &&
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

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;
