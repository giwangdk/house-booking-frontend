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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);

    const dataEdit = {
      fullname: values.fullname,
      oldPassword: values.password,
      newPassword: values.password,
      address: values.address,
    };

    const { isLoading } = useMutation(() => EditUser(dataEdit), {
      onSuccess: () => {
        toast.success('Edit Success');
        handleCloseEdit();
      },
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isLoading: isSubmitting,
  };
}
export default useForm;
