import { createBrowserRouter } from "react-router-dom"

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
        // {
        //   path: "men",
        //   element: <MenPage />,
        // },
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