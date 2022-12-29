import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../helpers/queryClient';
import { submitGame } from '../../../services/service';
import { Button } from '../../atoms';
import { Modal } from '../../molecules';
import { ModalCoinProps } from '../interface';
import style from './index.module.scss';

const ModalCoin: React.FC<ModalCoinProps> = ({
  show,
  handleCloseModal,
  isWin,
}): JSX.Element => {
  const { mutateAsync, isLoading } = useMutation(submitGame);

  const handleSubmit = () => {
    mutateAsync(
      {
        is_win: isWin,
      },
      {
        onSuccess: () => {
          handleCloseModal();
          toast.success('Success redeem money');
          queryClient.invalidateQueries('get-user-wallet');
        },
      },
    );
  };
  return (
    <Modal show={show} className={style.modal__coin}>
      <div className={style.modal__coin__content}>
        <h5 className={isWin ? style.win : style.lose}>
          You {isWin ? 'Win!' : 'Lose!'}{' '}
        </h5>
        <p>{isWin ? 'You get Rp. 100.000' : 'You only get Rp. 1000'}</p>
      </div>
      <div className={style.modal__coin__button}>
        <Button onClick={handleCloseModal}>Close</Button>
        <Button onClick={handleSubmit} loading={isLoading}>
          Redeem Money
        </Button>
      </div>
    </Modal>
  );
};

export default ModalCoin;
