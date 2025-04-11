import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";


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
          path:"/aboutUs",
          element:<AboutUs></AboutUs>
        },
       {
        path:"/contact",
        element:<Contact></Contact>
       }

      ]
    },

  ]);

export default router;