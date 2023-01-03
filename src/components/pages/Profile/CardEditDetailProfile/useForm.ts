import React, { useState } from 'react';
import { toast } from 'react-toastify';

import {
  EditProfileProps,
  FormReturnEditProfile,
} from '../../../../helpers/types/profile.interface';
import useAuth from '../../../../hooks/useAuth';
import { EditUser } from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';

function useForm(
  handleCloseEdit: () => void,
): FormReturnEditProfile<EditProfileProps> {
  const { user } = useAuth();
  const [values, setValues] = useState<EditProfileProps>({
    fullname: user?.fullname || '',
    address: user?.address || '',
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
    isLoading,
  };
}
export default useForm;
