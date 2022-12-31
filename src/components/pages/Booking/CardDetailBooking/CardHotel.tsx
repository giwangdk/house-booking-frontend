import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { DetailHouseProps } from '../../../molecules/interface';
import style from './index.module.scss';

const CardHotel: React.FC = () => {
  const { house } = useSelector((state: RootState) => state.house);

  return (
    <div className={style.card__detail__booking__house}>
      <img src={house?.photos?.[0]?.photo} alt="" />
      <ul className={style.card__detail__booking__house__desc}>
        <li>Bedrooms {house?.detail?.bedrooms}</li>
        <li>Bathrooms {house?.detail?.baths}</li>
      </ul>
    </div>
  );
};

export default CardHotel;
