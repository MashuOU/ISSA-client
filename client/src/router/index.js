import { createBrowserRouter } from "react-router-dom"
import Chat from "../pages/Chat"

import Container from "../pages/Container" 
import Home from "../pages/Home"  
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
        // {
        //   path: "kid",
        //   element: <KidPage />,
        // },
        // {
        //   path: "detail/:slug",
        //   element: <Detail />
        // }
      ]
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]
)

export default router