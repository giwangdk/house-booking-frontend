import React, { useState } from 'react';
import { toast } from 'react-toastify';

import {
  ChangePasswordProps,
  ErrorChangePassword,
  FormReturnChangePassword,
} from '../../../../helpers/types/profile.interface';
import { ChangePassword } from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';
import { useDispatch } from 'react-redux';
import { Logout } from '../../../../redux/authenticationSlice';

function useForm(
  handleCloseEdit: () => void,
  validateInfo: (values: ChangePasswordProps) => ChangePasswordProps,
): FormReturnChangePassword<ChangePasswordProps> {
  const [errors, setErrors] = useState<ErrorChangePassword>();
  const [values, setValues] = useState<ChangePasswordProps>({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const { mutateAsync, isLoading } = useMutation(ChangePassword);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateInfo(values));

    const dataEdit = {
      old_password: values.password,
      new_password: values.newPassword,
    };

    if (
      errors?.password === '' &&
      errors?.newPassword === '' &&
      errors?.confirmPassword === ''
    ) {
      mutateAsync(dataEdit, {
        onSuccess: () => {
          queryClient.invalidateQueries('get-user-detail');
          handleCloseEdit();
          toast.success('Edit Password Success');
          Logout()(dispatch);
        },
      });
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isLoading,
  };
}
export default useForm;
