import { createBrowserRouter } from "react-router-dom"
import AttendancePage from "../pages/Attendance"
import Chat from "../pages/Chat"

import Container from "../pages/Container" 
import Home from "../pages/Home"  
import LessonDetail from "../pages/LessonDetail"
import LessonsList from "../pages/LessonsList"
import LoginPage from "../pages/Login"
import ClientChat from "../pages/Chat-client"  
import TotalNilai from "../pages/TotalNilai"
import EventPage from "../pages/Event"
import PaymentPage from "../pages/PaymentPage"
import NotFound from "../pages/NotFound"




const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Container />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "chat",
          element: <ClientChat />,
        },
        {
          path: "attendance",
          element: <AttendancePage />,
        },
        {
          path: "total",
          element: <TotalNilai />,
        }, 
        {
          path: "lesson",
          element: <LessonsList />,
        },
        {
          path: "lesson/:id",
          element: <LessonDetail />
        },
        {
          path: "event",
          element: <EventPage />
        },
        {
          path: "payment",
          element: <PaymentPage />
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
)

export default router