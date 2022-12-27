import React from 'react';
import style from './index.module.scss';

const CardPaymentExpired = (): JSX.Element => {
  return (
    <div className={style.card__payment__expired}>
      <h6>Make a Payment Before</h6>
      <div className={style.card__payment__content}>
        <p>Today </p>
      </div>
    </div>
  );
};

export default CardPaymentExpired;
