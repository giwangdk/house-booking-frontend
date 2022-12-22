import React from 'react';
import { ErrorProps } from '../interface';
import style from './index.module.scss';

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <React.StrictMode>
      <div className={style.error}>{message}</div>
    </React.StrictMode>
  );
};

export default Error;
