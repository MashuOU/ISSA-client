import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import NewAdmin from "../pages/NewAdmin";
import Scores from "../pages/Scores";
import Lessons from "../pages/Lessons";
import AddLesson from "../pages/AddLesson";
import AddClass from "../pages/AddClass";
import AddSchedule from "../pages/AddSchedule";
import AddStudent from "../pages/AddStudent";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: () => {
    //   const access_token = localStorage.getItem("access_token");
    //   if (!access_token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/scores/:id",
        element: <Scores />,
      },
      {
        path: "/scores/:id/:idLesson",
        element: <Lessons />,
      },
      // {
      //   path: "/product/:id",
      //   element: <Modal />,
      // },
      // {
      //   path: "/categories",
      //   element: <Categories />,
      // },
      {
        path: "/newAdmin",
        element: <NewAdmin />,
      },
      {
        path: "/addStudent",
        element: <AddStudent />,
      },
      {
        path: "/addLesson",
        element: <AddLesson />,
      },
      {
        path: "/addClass",
        element: <AddClass />,
      },
      {
        path: "/addSchedule",
        element: <AddSchedule />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
