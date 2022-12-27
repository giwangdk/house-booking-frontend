import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { CardPaymentProps } from '../../pages/interface';
import style from './index.module.scss';

const CardTransfer: React.FC<CardPaymentProps> = ({
  reservation,
}): JSX.Element => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={style.card__payment__transfer}>
      <h6>Please pay your transaction</h6>
      <div className={style.card__payment__content}>
        {!isLoggedIn && (
          <>
            <div className={style.card__payment__content__item}>
              <p>No Virtual Account</p>
              <p> 4453367558587574</p>
            </div>
            <hr />
          </>
        )}

        <div className={style.card__payment__content__item}>
          <p>Total Price</p>
          <p> Rp. {reservation?.total_price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTransfer;
