import moment from 'moment';
import React from 'react';
import { CardPaymentProps } from '../../pages/interface';
import style from './index.module.scss';

const CardPaymentExpired: React.FC<CardPaymentProps> = ({
  reservation,
}): JSX.Element => {
  const fomattedExpiredTime = moment(reservation?.expired).format(
    'DD MMMM YYYY hh:mm:ss',
  );

  return (
    <div className={style.card__payment__expired}>
      <h6>Make a Payment Before</h6>
      <div className={style.card__payment__content}>
        <p>Today {fomattedExpiredTime} </p>
      </div>
    </div>
  );
};

export default CardPaymentExpired;
