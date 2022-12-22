import React from 'react';
import { CarouselProps } from '../interface';
import { Carousel } from 'react-responsive-carousel';
import style from './index.module.scss';

const CarouselPhoto: React.FC<CarouselProps> = ({ photos }) => {
  return (
    <div className={style.carousel}>
      <Carousel>
        {photos?.map((photo) => (
          <div key={photo.photo} className={style.carousel__photo}>
            <img src={photo.photo} alt="detail-house" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPhoto;
