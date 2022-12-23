import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const HostLayout = (): JSX.Element => {
  const { user } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();

  if (user?.role !== 'host') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default HostLayout;
