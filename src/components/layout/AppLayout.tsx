import React from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Navbar, NavbarMobile } from '../molecules';

const AppLayout = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {!isMobile ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <>
          <NavbarMobile />
          <Outlet />
        </>
      )}
    </>
  );
};

export default AppLayout;
