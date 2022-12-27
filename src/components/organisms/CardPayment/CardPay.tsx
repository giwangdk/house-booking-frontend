import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button } from '../../atoms';
import { InputUpload } from '../../molecules';
import style from './index.module.scss';

const CardPay: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={style.card__payment__pay}>
      <h6>Completed Your Payment?</h6>
      <ul className={style.card__payment__content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dicta.
        </p>
        {!isLoggedIn && (
          <div className={style.card__how__input}>
            <h6>Upload your</h6>
            <InputUpload />
          </div>
        )}
        <Button variant="tertiary" border="default" className={style.button}>
          I Have Completed Payment
        </Button>
      </ul>
    </div>
  );
};

export default CardPay;
