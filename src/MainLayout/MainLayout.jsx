import { Outlet } from "react-router-dom";
import DarkModeToggle from "../Shared/DarkMode/DarkModeToggle";
import Footer from "../Pages/Footer.jsx/Footer";
import Navbar from "../Shared/Navbar/Navbar";



const MainLayout = () => {
    return (
    
            <div className="min-h-screen  bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300">
       <div>
        
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>

     
    </div>
           
            
        
    );
};

export default MainLayout;