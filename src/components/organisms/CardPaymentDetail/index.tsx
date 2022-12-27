import React from 'react';
import { Card } from '../../molecules';
import style from './index.module.scss';

const CardPaymentDetail = (): JSX.Element => {
  return (
    <Card className={style.card__payment__detail}>
      <div className={style.card__payment__detail__item}>
        <h6>Booking ID</h6>
        <p>123456789</p>
      </div>
      <div className={style.card__payment__detail__item}>
        <h6>Hotel ALLLuUU</h6>
        <ul>
          <li>Tuesdat, 12 Jan 2021</li>
          <li>1 nights</li>
        </ul>
      </div>
      <div className={style.card__payment__detail__item}>
        <h6>Guest</h6>
        <p>Giwang</p>
      </div>
    </Card>
  );
};

export default CardPaymentDetail;
