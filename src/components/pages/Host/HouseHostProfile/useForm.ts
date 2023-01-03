import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { submitEditHouse } from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';
import {
  EditHouseProfileProps,
  FormReturnEditHouseProfile,
} from '../../../../helpers/types/house_host.interface';
import { IHouse } from '../../../../helpers/types';

function useForm(
  handleCloseEdit: () => void,
  house: IHouse,
): FormReturnEditHouseProfile<EditHouseProfileProps> {
  const [city, setCity] = useState<number | undefined>(
    house?.city?.id as number | 0,
  );
  const [values, setValues] = useState<EditHouseProfileProps>({
    name: house?.name as string | '',
    price: house?.price as number | 0,
    description: house?.description as string | '',
    location: house?.location as string | '',
  });
  const dataEdit = {
    name: values.name,
    price: values.price,
    description: values.description,
    location: values.location,
    city_id: city,
  };
  const editHouse = submitEditHouse(house?.id as number);

  const { mutateAsync, isLoading } = useMutation(editHouse);

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
  const handleChangeDropdown = (e: any) => {
    setCity(e.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(editHouse(dataEdit), {
      onSuccess: () => {
        queryClient.invalidateQueries('get-house-by-id');
        handleCloseEdit();
        toast.success('Edit House Success');
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
  };
}
export default useForm;
