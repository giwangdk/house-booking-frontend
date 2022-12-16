import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../molecules';
import { Container } from '../organisms';

const AppLayout = (): JSX.Element => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default AppLayout;
