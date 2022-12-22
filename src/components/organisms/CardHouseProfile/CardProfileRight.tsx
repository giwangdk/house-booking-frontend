import React from 'react';
import { IHouse } from '../../../helpers/types';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardProfileRight: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <div className={style.card__house__profile__right}>
      <h4>{house?.name}</h4>
      <p>
        {house?.location}, {house?.city.name}, Indonesia
      </p>
      <ul className={style.card__house__profile__right__details}>
        <li>{house?.detail.max_guest} Guest</li>
        <li>{house?.detail?.bedrooms} Bedrooms</li>
        <li>{house?.detail?.beds} Beds </li>
        <li>{house?.detail?.baths} Baths </li>
      </ul>
      <hr />
      <div className={style.card__house__profile__right__description}>
        <h6>Description</h6>
        <p>{house?.description}</p>
      </div>
      <hr />
      <div className={style.card__house__profile__right__price}>
        <h6>Price</h6>
        <p>Rp. {house?.price} / Night</p>
      </div>
    </div>
  );
};

export default CardProfileRight;
