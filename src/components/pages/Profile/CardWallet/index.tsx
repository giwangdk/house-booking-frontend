import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Button } from '../../../atoms';
import { Card } from '../../../molecules';
import { CardWalletProps } from '../../interface';
import ModalTopup from '../ModalTopup';
import style from './index.module.scss';
import validateInfo from './validate';
import useForm from './useForm';

const CardWallet: React.FC<CardWalletProps> = () => {
  const { wallet } = useAuth();
  const { handleShowModal, show, handleCloseModal } = useForm(validateInfo);

  return (
    <Card className={style.card__wallet}>
      <div className={style.card__wallet__title}>
        <h6>Wallet</h6>
        <Button
          className={style.card__wallet__title__button}
          border="default"
          onClick={handleShowModal}
        >
          Topup
        </Button>
      </div>
      <div className={style.card__wallet__detail}>
        <div className={style.card__wallet__detail__left}>
          <p>Account</p>
          <p>{wallet?.ID}</p>
        </div>
        <div className={style.card__wallet__detail__right}>
          <p>Balance</p>
          <p>{wallet?.balance}</p>
        </div>
      </div>
      <ModalTopup show={show} handleCloseModal={handleCloseModal} />
    </Card>
  );
};

export default CardWallet;
