import React, { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../molecules';
import { Container } from '../organisms';
import style from './index.module.scss';

interface AppHostLayoutProps {
  children: React.ReactNode;
  image?: string;
  layout: string;
}
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
