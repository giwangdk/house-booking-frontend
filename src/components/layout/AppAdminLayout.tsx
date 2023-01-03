import React from 'react';
import { AiFillBook, AiFillCar, AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../molecules';
import style from './index.module.scss';

const menu = [
  {
    path: '/admin/houses',
    label: 'List Houses',
    icon: <AiFillHome />,
  },

  {
    path: '/admin/pickups',
    label: 'List Pickup',
    icon: <AiFillCar />,
  },
  {
    path: '/admin/transactions-guest',
    label: 'Transactions Guest',
    icon: <AiFillBook />,
  },
];

const AppAdminLayout: React.FC = (): JSX.Element => {
  return (
    <div className={style.host__layout}>
      <Sidebar menu={menu} />
      <div className={style.host__layout__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppAdminLayout;
