import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Card } from '../../molecules';
import CardHowToPay from './CardHowToPay';
import CardPay from './CardPay';
import CardPaymentExpired from './CardPaymentExpired';
import CardTransfer from './CardTransfer';
import style from './index.module.scss';

const CardPayment: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Card className={style.card__payment}>
      <CardPaymentExpired />
      <CardTransfer />
      <CardHowToPay />
      <CardPay />
    </Card>
  );
};

export default CardPayment;
