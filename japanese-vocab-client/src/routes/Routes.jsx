import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tutorials from "../pages/Tutorials";
import Lessons from "../pages/Lessons";
import Dashboard from "../layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/lessons",
        element: <Lessons />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children:[{}]
  }
]);
