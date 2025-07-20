import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import DarkModeToggle from './Shared/DarkMode/DarkModeToggle.jsx';

createRoot(document.getElementById('root')).render(
 
   <StrictMode>
     <div className='max-w-[1300px] min-h-full mx-auto'>
     
     
      
     <RouterProvider router={router} />
     </div>
  </StrictMode>
 ,
)
