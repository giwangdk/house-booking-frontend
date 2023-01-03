import React from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Navbar, NavbarMobile } from '../molecules';

const AppLayout = (): JSX.Element => {
  const isMobile = useMediaQuery(768);

  return (
    <>
      {!isMobile && <Navbar />}
      <Outlet />
      {isMobile && <NavbarMobile />}
    </>
  );
};

export default AppLayout;
