import React, { useState } from 'react';
import { toast } from 'react-toastify';

import useAuth from '../../../../hooks/useAuth';
import {
  submitAddHouseDetail,
  submitEditHouseDetail,
} from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';
import {
  EditHouseDetailProps,
  FormReturnEditHouseDetail,
} from '../../../../helpers/types/house_host.interface';
import { IHouse } from '../../../../helpers/types';

function useForm(
  handleCloseEdit: () => void,
  house: IHouse | undefined,
): FormReturnEditHouseDetail<EditHouseDetailProps> {
  const [values, setValues] = useState<EditHouseDetailProps>({
    max_guest: (house?.detail?.max_guest as number) | 0,
    bedrooms: (house?.detail?.bedrooms as number) | 0,
    beds: (house?.detail?.beds as number) | 0,
    baths: (house?.detail?.baths as number) | 0,
  });
  const dataEdit = {
    max_guest: Number(values.max_guest),
    bedrooms: values.bedrooms,
    beds: values.beds,
    baths: values.baths,
  };

  const editHouse = submitEditHouseDetail(house?.detail?.id as number);
  const addHouseDetail = submitAddHouseDetail(house?.id as number);

  const submitEditHouse = useMutation((data: EditHouseDetailProps) =>
    editHouse(data),
  );
  const submitAddHouse = useMutation((data: EditHouseDetailProps) =>
    addHouseDetail(data),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (house?.detail?.id === 0) {
      submitAddHouse.mutate(dataEdit, {
        onSuccess: () => {
          queryClient.invalidateQueries('get-house-by-id');
          handleCloseEdit();
          toast.success('Add House Success');
        },
      });
    } else {
      submitEditHouse.mutate(dataEdit, {
        onSuccess: () => {
          queryClient.invalidateQueries('get-house-by-id');
          handleCloseEdit();
          toast.success('Edit House Success');
        },
      });
    }
  };

  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
    isLoading: submitAddHouse.isLoading || submitEditHouse.isLoading,
  };
}
export default useForm;
