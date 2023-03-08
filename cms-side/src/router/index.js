import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import NewAdmin from "../pages/NewAdmin";
import Scores from "../pages/Scores";
import AddLesson from "../pages/AddLesson";
import AddClass from "../pages/AddClass";
import AddSchedule from "../pages/AddSchedule";
import AddStudent from "../pages/AddStudent";
import Login from "../pages/Login";
import Class from "../pages/Class";
import Schedule from "../pages/Schedule";
import Teacher from "../pages/Teacher";
import Attendance from "../pages/Attendance";
import ChatRoom from "../pages/ChatRoom";
import AddScores from "../pages/AddScores";
import History from "../pages/History";
import Lessons from "../pages/Lessons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/scores/:studentId",
        element: <Scores />,
      },

      {
        path: "/chat",
        element: <ChatRoom />,
      },
      {
        path: "/newAdmin",
        element: <NewAdmin />,
      },
      {
        path: "/addStudent",
        element: <AddStudent />,
      },
      {
        path: "/formLesson",
        element: <AddLesson />,
      },
      {
        path: "/class",
        element: <Class />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/lesson",
        element: <Lessons />,
      },
      {
        path: "/teacher",
        element: <Teacher />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/formClass",
        element: <AddClass />,
      },
      {
        path: "/addScores",
        element: <AddScores />,
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
