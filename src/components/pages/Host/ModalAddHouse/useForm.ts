import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { submitAddHouse, submitEditHouse } from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';
import {
  AddHouseProps,
  ErrorAddHouseProfile,
  FormReturnAddHouseProfile,
} from '../../../../helpers/types/house_host.interface';
import { IHouse } from '../../../../helpers/types';
import { useNavigate } from 'react-router-dom';

function useForm(
  validateInfo: (values: AddHouseProps) => ErrorAddHouseProfile,
  handleCloseEdit: () => void,
): FormReturnAddHouseProfile<AddHouseProps> {
  const [city, setCity] = useState<number | undefined>(1);
  const [errors, setErrors] = useState<ErrorAddHouseProfile>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState<AddHouseProps>({
    name: '',
    price: 0,
    description: '',
    location: '',
  });
  const data = {
    name: values.name,
    price: values.price,
    description: values.description,
    location: values.location,
    city_id: city,
  };

  const { mutateAsync, isLoading } = useMutation(submitAddHouse);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleChangeDropdown = (e: any) => {
    setCity(e.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
    mutateAsync(data, {
      onSuccess: (res) => {
        queryClient.invalidateQueries('getHousesHost');
        handleCloseEdit();
        navigate(`/host/house/${res?.data?.data?.id}`);
        toast.success('Add House Success');
        setValues({
          name: '',
          price: 0,
          description: '',
          location: '',
        });
        setCity(1);
      },
      onError: (err) => {
        toast.error(err as string);
      },
    });
  };

  return {
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    setValues,
    values,
    city,
    isLoading,
    setCity,
    errors,
  };
}
export default useForm;
