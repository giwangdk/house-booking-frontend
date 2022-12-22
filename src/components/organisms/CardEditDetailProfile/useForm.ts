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

function useForm(
  handleCloseEdit: () => void,
): FormReturnEditProfile<EditProfileProps> {
  const { user } = useAuth();
  const [values, setValues] = useState<EditProfileProps>({
    fullname: user?.fullname || '',
    address: user?.address || '',
    password: '',
    newPassword: '',
  });
  const [errors, setErrors] = useState<ErrorEditProfile>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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

    const data = {
      fullname: values.fullname,
      oldPassword: values.password,
      newPassword: values.password,
      address: values.address,
    };

    dispatch(setIsLoading(true));
    EditUser(data)
      .then((res) => {
        console.log(res);

        toast.success('Edit Success');
        handleCloseEdit();
      })
      .catch((err) => {
        dispatch(setIsError(true));
        console.log(err);

        toast.error(err.response.data.message);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  return { handleChange, handleSubmit, values, errors };
}
export default useForm;
