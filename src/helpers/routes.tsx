import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout, ProtectedPage } from '../components';
import AdminLayout from '../components/layout/AdminLayout';
import AppAdminLayout from '../components/layout/AppAdminLayout';
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
const HousesAdmin = lazy(() => import('../pages/admin/Houses'));
const PickupsAdmin = lazy(() => import('../pages/admin/Pickups'));
const HouseDetailHost = lazy(() => import('../pages/host/Houses/Detail'));
const Games = lazy(() => import('../pages/Games'));

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
          {
            path: 'game',
            element: <Games />,
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
                path: '/host/houses',
                element: <Houses />,
              },
              {
                path: '/host/house/:id',
                element: <HouseDetailHost />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedPage />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            element: <AppAdminLayout />,
            children: [
              {
                path: '/admin/houses',
                element: <HousesAdmin />,
              },
              {
                path: '/admin/pickups',
                element: <PickupsAdmin />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
