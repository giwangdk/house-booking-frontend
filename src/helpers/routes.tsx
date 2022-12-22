import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout, ProtectedPage } from '../components';

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Profile = lazy(() => import('../pages/Profile'));
const Home = lazy(() => import('../pages/Home'));

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
        element: <ProtectedPage />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/',
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
