import React from 'react';
import { CardDetailProfileItemProps } from '../interface';
import style from './index.module.scss';

const CardDetailProfileItem: React.FC<CardDetailProfileItemProps> = ({
  label,
  item,
}) => {
  return (
    <div className={style.card__detail__content__item}>
      <p>{label}</p>
      <p>{item}</p>
    </div>
  );
};

export default CardDetailProfileItem;
