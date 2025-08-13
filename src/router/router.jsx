import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";

import Contact from "../Pages/Contact/Contact";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Experience from "../Pages/Experience/Experience";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <errorElement></errorElement>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/aboutme",
          element:<AboutMe></AboutMe>
        },
       {
        path:"/contact",
        element:<Contact></Contact>
       },
       {
        path:"experience",
        element:<Experience></Experience>
       }

      ]
    },

  ]);

export default router;