import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button } from '../../atoms';
import { Card, InputUpload } from '../../molecules';
import style from './index.module.scss';

const CardHowToPay: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Card className={style.card__how}>
      <h6>How To Pay? </h6>
      <ul className={style.card__how__content}>
        <li className={style.card__how__content__item}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className={style.card__how__content__item}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className={style.card__how__content__item}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className={style.card__how__content__item}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </li>
      </ul>
      <hr />
      {!isLoggedIn && (
        <div className={style.card__how__input}>
          <h6>Upload your</h6>
          <InputUpload />
        </div>
      )}
      <Button>Pay</Button>
    </Card>
  );
};

export default CardHowToPay;