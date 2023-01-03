import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarProps } from '../interface';
import MenuItem from '../MenuItem';
import style from './index.module.scss';

const Sidebar: React.FC<SidebarProps> = ({ menu }): JSX.Element => {
  return (
    <div className={style.sidebar} id="navbar">
      <Link to="/" className={style.sidebar__brand}>
        <p>DigiHouse</p>
      </Link>
      <ul className={style.sidebar__menu}>
        {menu.map((item) => (
          <MenuItem
            key={item.path}
            path={item.path as string}
            label={item.label as string}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
