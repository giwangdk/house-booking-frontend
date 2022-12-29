import React from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { getWalletUser } from '../../services/service';
import { Navbar, NavbarMobile } from '../molecules';
import { Container } from '../organisms';

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
