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
import {
  EditProfileProps,
  ErrorEditProfile,
  FormReturnEditProfile,
} from '../../../helpers/types/profile.interface';
import useAuth from '../../../hooks/useAuth';
import { EditUser } from '../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../helpers/queryClient';

function useForm(
  handleCloseEdit: () => void,
): FormReturnEditProfile<EditProfileProps> {
  const { user } = useAuth();
  const [errors, setErrors] = useState();
  const [values, setValues] = useState<EditProfileProps>({
    fullname: user?.fullname || '',
    address: user?.address || '',
    password: '',
    newPassword: '',
  });
  const { mutateAsync, isLoading } = useMutation(EditUser);

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
      fullname: values.fullname,
      old_password: values.password,
      new_password: values.password,
      address: values.address,
    };

    mutateAsync(dataEdit, {
      onSuccess: () => {
        queryClient.invalidateQueries('get-user-detail');
        handleCloseEdit();
        toast.success('Edit Profile Success');
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
