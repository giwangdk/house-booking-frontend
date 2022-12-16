import React from 'react';
import Card from '../Card';
import { CardWalletProps } from '../interface';
import style from './index.module.scss';

const CardWallet: React.FC<CardWalletProps> = () => {
  return (
    <Card className={style.card__wallet}>
      <h6>Wallet</h6>
      <div className={style.card__wallet__detail}>
        <div className={style.card__wallet__detail__left}>
          <p>Account</p>
          <p>1000484952</p>
        </div>
        <div className={style.card__wallet__detail__right}>
          <p>Balance</p>
          <p>Rp.400.0000</p>
        </div>
      </div>
    </Card>
  );
};

export default CardWallet;
