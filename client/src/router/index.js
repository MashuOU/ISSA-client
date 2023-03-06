import { createBrowserRouter } from "react-router-dom"
import Chat from "../pages/Chat"

import Container from "../pages/Container" 
import Home from "../pages/Home"  
import LessonDetail from "../pages/LessonDetail"
import LessonsList from "../pages/LessonsList"
import LoginPage from "../pages/Login"
import ReactChat from "../pages/React-chat"  

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
          element: <Chat />,
        },
        {
          path: "react-chat",
          element: <ReactChat />,
        },
        {
          path: "lesson",
          element: <LessonsList />,
        },
        {
          path: "lesson/:id",
          element: <LessonDetail />
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]
)

export default router