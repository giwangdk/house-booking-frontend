import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Card } from '../../molecules';
import { CardWalletProps } from '../interface';
import style from './index.module.scss';

const CardWallet: React.FC<CardWalletProps> = () => {
  const { wallet } = useAuth();

  return (
    <React.StrictMode>
      <Card className={style.card__wallet}>
        <h6>Wallet</h6>
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
      </Card>
    </React.StrictMode>
  );
};

export default CardWallet;
