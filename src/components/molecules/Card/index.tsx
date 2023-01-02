/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import { CardProps } from '../interface';
import style from './index.module.scss';

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  const classProps = classNames(style.card, className);

  return (
    <div className={classProps} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
