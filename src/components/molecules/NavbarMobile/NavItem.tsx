import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItemProps } from '../interface';
import style from './index.module.scss';

const NavItem: React.FC<MenuItemProps> = ({ icon, path }) => {
  const classActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? style.navbar__item__isActive : style.navbar__item__link;

  return (
    <div className={style.navbar__item}>
      <NavLink to={path} className={classActive}>
        {icon}
      </NavLink>
    </div>
  );
};

export default NavItem;
