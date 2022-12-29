import React from 'react';
import { CarouselPhoto } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import CardProfileRight from './CardProfileRight';
import style from './index.module.scss';

const CardHouseProfile: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <div className={style.card__house__profile}>
      <CarouselPhoto photos={house?.photos} />
      <CardProfileRight house={house} />
    </div>
  );
};

export default CardHouseProfile;
