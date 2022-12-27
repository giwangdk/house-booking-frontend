import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemProps } from '../interface';
import style from './index.module.scss';

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  path,
  icon,
}): JSX.Element => {
  return (
    <div className={style.menu__item}>
      {icon}
      <Link to={path}>{label}</Link>
    </div>
  );
};

export default MenuItem;
