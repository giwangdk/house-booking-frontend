import classNames from 'classnames';
import React from 'react';
import { CardProps } from '../interface';
import style from './index.module.scss';

const Card: React.FC<CardProps> = ({ children, className }) => {
  const classProps = classNames(style.card, className);

  return (
    <React.StrictMode>
      <div className={classProps}>{children}</div>
    </React.StrictMode>
  );
};

export default Card;
