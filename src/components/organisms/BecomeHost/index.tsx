import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../helpers/queryClient';
import { submitBecomeHost } from '../../../services/service';
import { Button } from '../../atoms';
import { Modal } from '../../molecules';
import { BecomeHostProps } from '../interface';
import style from './index.module.scss';

const BecomeHost: React.FC<BecomeHostProps> = ({
  show,
  handleCloseModal,
}): JSX.Element => {
  const { mutateAsync, isLoading } = useMutation(submitBecomeHost);

  const handleBecomeHost = () => {
    mutateAsync({
      onSuccess: () => {
        toast.success('You are now a host! Upload your property now!');
        handleCloseModal();
        queryClient.invalidateQueries('get-user-detail');
      },
    });
  };

  return (
    <Modal show={show} className={style.modal__host}>
      <div className={style.modal__host__header}>
        <h6>Become Host</h6>
        <Button
          onClick={handleCloseModal}
          border="pill"
          className={style.modal__host__header__button}
        >
          X
        </Button>
      </div>
      <div className={style.modal__host__body}>
        <p>Do you want to become host?</p>
        <div className={style.modal__host__body__button}>
          <Button onClick={handleBecomeHost} loading={isLoading}>
            Yes
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BecomeHost;
