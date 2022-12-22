import React from 'react';
import { Link } from 'react-router-dom';
import { DetailHouseProps } from '../interface';
import style from './index.module.scss';

const CardHouse: React.FC<DetailHouseProps> = ({ house }): JSX.Element => {
  console.log(house);

  const photo = house.photos;

  return (
      <Link className={style.card__house} to={`/house/${house.id}`}>
        <div className={style.card__house__image}>
          <img src={photo?.[0].photo} alt="house" />
        </div>
        <div className={style.card__house__info}>
          <h5>{house?.name}</h5>
          <p>
            {house?.location} {house?.city?.name}, Indonesia
          </p>
          <div className={style.card__house__info__price}>
            <p>Rp. {house?.price}</p>
            <p>per night</p>
          </div>
        </div>
      </Link>
  );
};

export default CardHouse;
