import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout, ProtectedPage } from '../components';
import AppHostLayout from '../components/layout/AppHostLayout';
import HostLayout from '../components/layout/HostLayout';

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Profile = lazy(() => import('../pages/Profile'));
const Home = lazy(() => import('../pages/Home'));
const HouseDetail = lazy(() => import('../pages/HouseDetail'));
const Booking = lazy(() => import('../pages/Booking'));
const Payment = lazy(() => import('../pages/Payment'));
const Houses = lazy(() => import('../pages/host/Houses'));

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'house/:id',
        element: <HouseDetail />,
      },
      {
        path: 'house-book/:id',
        element: <Booking />,
        children: [],
      },
      {
        path: 'payment/:bookingCode',
        element: <Payment />,
      },
      {
        element: <ProtectedPage />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedPage />,
    children: [
      {
        element: <HostLayout />,
        children: [
          {
            element: <AppHostLayout />,
            children: [
              {
                path: '/host',
                element: <Houses />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
