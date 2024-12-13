import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tutorials from "../pages/Tutorials";
import Lessons from "../pages/Lessons";
import Dashboard from "../layout/Dashboard";
import UserManagement from "../components/UserManagement";
import TutorialManagement from "../components/TutorialManagement";
import ContentManagement from "../components/ContentManagement";
import AddLessons from "../components/AddLessons";
import UpdateLesson from "../components/UpdateLesson";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/lessons",
        element: (
          <PrivateRoute>
            <Lessons />
          </PrivateRoute>
        ),
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
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "user-management",
        element: (
          <AdminRoute>
            <UserManagement />
          </AdminRoute>
        ),
      },
      {
        path: "tutorial-management",
        element: <TutorialManagement />,
      },
      {
        path: "content-management",
        element: <ContentManagement />,
      },
      {
        path: "add-lessons",
        element: (
          <AdminRoute>
            <AddLessons />
          </AdminRoute>
        ),
      },
      {
        path: "update-lesson/:id",
        element: (
          <AdminRoute>
            <UpdateLesson />
          </AdminRoute>
        ),
        loader: ({params}) =>
          fetch(
            `https://japanese-vocab-server-neon.vercel.app/lesson/${params.id}`
          ),
      },
    ],
  },
]);
