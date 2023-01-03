import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';

const HostLayout = (): JSX.Element => {
  const location = useLocation();

  const cookie = new Cookies();

  const decodedToken: {
    user: {
      role: string;
    };
  } = jwt_decode(cookie.get('token'));

  if (decodedToken?.user?.role !== 'host') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default HostLayout;
