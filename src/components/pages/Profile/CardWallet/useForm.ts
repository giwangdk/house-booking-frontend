import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { FormTopupReturn } from '../../interface';
import { ErrorTopup, TopupProps } from '../../../pages/interface';
import { submitTopup } from '../../../../services/service';
import { useMutation } from 'react-query';
import { queryClient } from '../../../../helpers/queryClient';

function useForm(
  validateInfo: (values: TopupProps) => ErrorTopup,
): FormTopupReturn<TopupProps, ErrorTopup> {
  const { user } = useAuth();

  const [values, setValues] = useState({
    amount: '',
  });

  const [errors, setErrors] = useState<ErrorTopup>();
  const [errorsMsg, setErrorsMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const { mutateAsync, isLoading } = useMutation(submitTopup);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCloseModal = () => {
    console.log('wawwww', show);

    setShow(false);
  };

  const handleShowModal = () => {
    setShow(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);

    const data = {
      amount: parseInt(values.amount as unknown as string),
    };

    if (Object.keys(errors?.amount || {}).length === 0 && isSubmitting) {
      mutateAsync(
        { amount: data.amount },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('get-user-wallet');
            handleCloseModal();
            toast.success('Topup Success');
          },
        },
      );
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleCloseModal,
    handleShowModal,
    show,
    values,
    isLoading,
    errors,
    errorsMsg,
  };
}

export default useForm;
