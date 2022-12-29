import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { MenuItemProps } from '../interface';
import style from './index.module.scss';

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  path,
  icon,
}): JSX.Element => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={style.menu__item}>
      <Link to={path}>
        <div className={style.menu__item__icon}>{icon}</div>
        <p className={style.menu__item__label}>{label}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
