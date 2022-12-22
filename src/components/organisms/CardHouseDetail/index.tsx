import React from 'react';
import { DetailHouseProps } from '../../molecules/interface';
import CardReservation from '../CardResevation';
import style from './index.module.scss';

const CardHouseDetail: React.FC<DetailHouseProps> = ({
  house,
}): JSX.Element => {
  return (
    <div className={style.card__house__detail}>
      <div className={style.card__house__detail__left}></div>
      <div className={style.card__house__detail__right}>
        <CardReservation house={house} />
      </div>
    </div>
  );
};

export default CardHouseDetail;
