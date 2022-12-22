import React from 'react';
import { Card, InputDate } from '../../molecules';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardReservation: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <Card className={style.card__reservation}>
      <h6>Rp. {house.price}/ night</h6>
      <div className={style.card__resevation__date}>
        <InputDate />
        <InputDate />
      </div>
    </Card>
  );
};

export default CardReservation;
