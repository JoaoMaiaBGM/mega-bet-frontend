import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"}></Navigate>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
