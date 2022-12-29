import React, { useState } from 'react';
import { toast } from 'react-toastify';

import {
  ChangePasswordProps,
  EditProfileProps,
  FormReturnChangePassword,
  FormReturnEditProfile,
} from '../../../../helpers/types/profile.interface';
import useAuth from '../../../../hooks/useAuth';
import { ChangePassword, EditUser } from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';
import { useDispatch } from 'react-redux';
import { Logout } from '../../../../redux/authenticationSlice';

function useForm(
  handleCloseEdit: () => void,
): FormReturnChangePassword<ChangePasswordProps> {
  const { user } = useAuth();
  const [errors, setErrors] = useState();
  const [values, setValues] = useState<ChangePasswordProps>({
    password: '',
    newPassword: '',
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

    const dataEdit = {
      old_password: values.password,
      new_password: values.password,
    };

    mutateAsync(dataEdit, {
      onSuccess: () => {
        queryClient.invalidateQueries('get-user-detail');
        handleCloseEdit();
        toast.success('Edit Password Success');
        Logout()(dispatch);
      },
    });
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
