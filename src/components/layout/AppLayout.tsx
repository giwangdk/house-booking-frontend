import React from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import { getWalletUser } from '../../services/service';
import { Navbar } from '../molecules';
import { Container } from '../organisms';

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
