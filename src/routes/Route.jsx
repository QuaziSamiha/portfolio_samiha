import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects/Projects";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      // {
      //   path: "contact",
      //   element: <Contact />,
      // },
    ],
  },
]);

export default router;
