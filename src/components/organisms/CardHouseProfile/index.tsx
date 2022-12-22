import React from 'react';
import { CarouselPhoto } from '../../molecules';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardHouseProfile: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <div className={style.card__house__profile}>
      <div className={style.card__house__profile_top}>
        <h4>{house?.name}</h4>
        <p>
          {house?.location}, {house?.city.name}, Indonesia
        </p>
      </div>
      <CarouselPhoto photos={house?.photos} />
    </div>
  );
};

export default CardHouseProfile;
