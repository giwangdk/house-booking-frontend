import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const Login = lazy(() => import("../pages/auth/Login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  }
])
  