import React from 'react';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardHotel: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <div className={style.card__detail_booking__detail}>
      <img src={house?.photos?.[0]?.photo} alt="" />
      <ul className={style.card__house__booking__desc}>
        <li>Bedrooms {house?.detail?.bedrooms}</li>
        <li>Bathrooms {house?.detail?.baths}</li>
      </ul>
    </div>
  );
};

export default CardHotel;
