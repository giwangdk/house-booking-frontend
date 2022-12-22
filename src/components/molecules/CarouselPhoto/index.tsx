import React from 'react';
import { CarouselProps } from '../interface';
import { Carousel } from 'react-responsive-carousel';
import style from './index.module.scss';

const CarouselPhoto: React.FC<CarouselProps> = ({ photos }) => {
  return (
      <Carousel autoPlay className={style.carousel}>
        {photos?.map((photo) => (
          <div key={photo.photo}>
            <img src={photo.photo} alt="detail-house" />
          </div>
        ))}
      </Carousel>
  );
};

export default CarouselPhoto;
