import React from 'react';
import { ContainerProps } from '../interface';
import style from './index.module.scss';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
