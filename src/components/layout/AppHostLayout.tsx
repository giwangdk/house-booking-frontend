import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../molecules';
import style from './index.module.scss';

const menu = [
  {
    path: '/host/houses',
    label: 'My Houses',
    icon: <AiFillHome />,
  },
];

const AppHostLayout: React.FC = (): JSX.Element => {
  return (
    <div className={style.host__layout}>
      <Sidebar menu={menu} />
      <div className={style.host__layout__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppHostLayout;
