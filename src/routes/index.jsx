import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

function ProtectedRoute(props) {
  const token = localStorage.getItem("$TOKEN");

  return token ? props.children : <Navigate to={"/login"} />;
}

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"}></Navigate>,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
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
