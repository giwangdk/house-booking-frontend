import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { setGame, setUser, setWallet } from '../../redux/authenticationSlice';
import {
  getGameUser,
  getUserDetails,
  getWalletUser,
} from '../../services/service';

const ProtectedPage = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();

  useQuery('get-user-detail', async () => {
    await getUserDetails().then((res) => {
      dispatch(setUser(res.data.data));
    });
  });

  useQuery('get-user-wallet', async () => {
    await getWalletUser().then((res) => {
      dispatch(setWallet(res.data.data));
    });
  });

  useQuery('get-user-game', async () => {
    await getGameUser().then((res) => {
      dispatch(setGame(res.data.data));
    });
  });
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedPage;
