import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../../../hooks/useAuth';
import {
  submitTransaction,
  submitTransactionGuest,
} from '../../../../services/service';
import { Button } from '../../../atoms';
import { InputUpload } from '../../../molecules';
import { CardPaymentProps } from '../../../pages/interface';
import style from './index.module.scss';
import ModalSuccessPayment from './ModalSuccessPayment';

const CardPay: React.FC<CardPaymentProps> = ({ reservation }) => {
  const { isLoggedIn } = useAuth();
  const [image, setImage] = useState<File>();
  const [show, setShow] = useState(false);
  const { mutateAsync, isLoading } = useMutation(submitTransaction);
  const navigate = useNavigate();

  const submitTxGuest = submitTransactionGuest(
    reservation?.booking_code as string,
  );

  const submitReqConfirmation = useMutation((data: FormData) =>
    submitTxGuest(data),
  );
  const data = {
    booking_code: reservation?.booking_code,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    setImage(file as File);
  };

  const handleCloseModal = () => {
    setShow(false);
    navigate('/');
  };

  const handleShowModal = () => {
    setShow(true);
  };

  console.log(image);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('transfer_slip', image as Blob);
    {
      isLoggedIn
        ? mutateAsync(data, {
            onSuccess: () => {
              toast.success('Payment Success');
              handleShowModal();
            },
            onError: () => {
              toast.error('Fail pay transactions!');
            },
          })
        : submitReqConfirmation.mutate(formData, {
            onSuccess: () => {
              toast.success('Your Payment is waiting for confirmation');
              navigate('/');
            },
            onError: () => {
              toast.error('Fail pay transactions!');
            },
          });
    }
  };

  return (
    <div className={style.card__payment__pay}>
      <h6>Completed Your Payment?</h6>
      <ul className={style.card__payment__content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dicta.
        </p>
        {!isLoggedIn && (
          <div className={style.card__payment__pay__input}>
            <p>Upload your</p>
            <InputUpload onChange={handleChange} value={image} />
          </div>
        )}
        <Button
          border="default"
          className={style.button}
          onClick={handleSubmit}
          loading={isLoading ? isLoading : submitReqConfirmation.isLoading}
          disabled={isLoading}
        >
          I Have Completed Payment
        </Button>
        <ModalSuccessPayment
          show={show}
          handleCloseModal={handleCloseModal}
          reservation={reservation}
        />
      </ul>
    </div>
  );
};

export default CardPay;
