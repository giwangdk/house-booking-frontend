import classNames from 'classnames';
import React from 'react';
import { ContainerProps } from '../interface';
import style from './index.module.scss';

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classProps = classNames(style.container, className);
  return <div className={classProps}>{children}</div>;
};

export default Container;
