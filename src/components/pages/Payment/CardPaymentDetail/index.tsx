import moment from 'moment';
import React from 'react';
import { Card } from '../../../molecules';
import { CardPaymentProps } from '../../../pages/interface';
import style from './index.module.scss';

const CardPaymentDetail: React.FC<CardPaymentProps> = ({
  reservation,
}): JSX.Element => {
  const formattedCheckin = moment(
    moment(reservation?.check_in).toDate(),
  ).format('DD MMM YYYY');

  const nights = moment(reservation?.check_out).diff(
    moment(reservation?.check_in),
    'days',
  );

  return (
    <Card className={style.card__payment__detail}>
      <div className={style.card__payment__detail__item}>
        <h6>Booking ID</h6>
        <p>{reservation?.booking_code}</p>
      </div>
      <div className={style.card__payment__detail__item}>
        <h6>{reservation?.house?.name}</h6>
        <ul>
          <li>{formattedCheckin}</li>
          <li>{nights} nights</li>
        </ul>
      </div>
      <div className={style.card__payment__detail__item}>
        <h6>Guest</h6>
        <span>{reservation?.user?.fullname}</span>
      </div>
    </Card>
  );
};

export default CardPaymentDetail;
