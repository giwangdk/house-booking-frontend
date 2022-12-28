import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import MenuItem from '../MenuItem';
import style from './index.module.scss';

const menu = [
  {
    path: '/host/houses',
    label: 'My Houses',
    icon: <AiFillHome />,
  },
  {},
];

const Sidebar = (): JSX.Element => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__brand}>
        <p>DigiHouse</p>
      </div>
      <ul>
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