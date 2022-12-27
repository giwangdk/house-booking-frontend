import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../molecules';
import { Container } from '../organisms';
import style from './index.module.scss';

interface AppHostLayoutProps {
  children: React.ReactNode;
  image?: string;
  layout: string;
}

const AppHostLayout: React.FC = (): JSX.Element => {
  return (
    <div className={style.host__layout}>
      <Sidebar />
      <div className={style.host__layout__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppHostLayout;
