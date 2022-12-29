import React from 'react';
import { Card } from '../../../molecules';
import { CardPaymentProps } from '../../../pages/interface';
import CardHowToPay from './CardHowToPay';
import CardPay from './CardPay';
import CardPaymentExpired from './CardPaymentExpired';
import CardTransfer from './CardTransfer';
import style from './index.module.scss';

const CardPayment: React.FC<CardPaymentProps> = ({ reservation }) => {
  return (
    <Card className={style.card__payment}>
      <CardPaymentExpired reservation={reservation} />
      <CardTransfer reservation={reservation} />
      <CardHowToPay reservation={reservation} />
      <CardPay reservation={reservation} />
    </Card>
  );
};

export default CardPayment;
