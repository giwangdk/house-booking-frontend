import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../../../hooks/useAuth';
import { submitTransaction } from '../../../../services/service';
import { Button } from '../../../atoms';
import { InputUpload } from '../../../molecules';
import { CardPaymentProps } from '../../../pages/interface';
import style from './index.module.scss';
import ModalSuccessPayment from './ModalSuccessPayment';

const CardPay: React.FC<CardPaymentProps> = ({ reservation }) => {
  const { isLoggedIn } = useAuth();
  const [image, setImage] = useState<string | Blob>('');
  const [show, setShow] = useState(false);
  const { mutateAsync, isLoading } = useMutation(submitTransaction);
  const navigate = useNavigate();

  const data = {
    booking_code: reservation?.booking_code,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    setImage(file as Blob);
  };

  const handleCloseModal = () => {
    setShow(false);
    navigate('/');
  };

  const handleShowModal = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    {
      isLoggedIn &&
        mutateAsync(data, {
          onSuccess: () => {
            toast.success('Payment Success');
            handleShowModal();
          },
        });
    }

    const formData = new FormData();
    formData.append('transfer_slip', image);
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
            <InputUpload value={image} onChange={handleChange} />
          </div>
        )}
        <Button
          variant="tertiary"
          border="default"
          className={style.button}
          onClick={handleSubmit}
          loading={isLoading}
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
