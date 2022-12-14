import React from 'react';
import { ErrorProps } from '../interface';
import style from './index.module.scss';

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className={style.error}>{message}</div>;
};

export default Error;
