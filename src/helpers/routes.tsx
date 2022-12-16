import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedPage from "../components/layout/ProtectedPage";


const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Profile = lazy(() => import("../pages/Profile"));

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element:<ProtectedPage />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      }
    ]
  }
])
  