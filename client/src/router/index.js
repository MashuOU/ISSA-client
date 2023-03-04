import { createBrowserRouter } from "react-router-dom"
import Chat from "../pages/Chat"

import Container from "../pages/Container" 
import Home from "../pages/Home"  

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
  ]
)

export default router