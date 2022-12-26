import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Card } from '../../molecules';
import style from './index.module.scss';

const CardPayment: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Card className={style.card__payment}>
      <h6>Please pay your transaction</h6>
      <div className={style.card__payment__content}>
        {isLoggedIn && (
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
          <p> 4453367558587574</p>
        </div>
      </div>
    </Card>
  );
};

export default CardPayment;
