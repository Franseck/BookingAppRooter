import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vacay from "../pages/Vacay";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import TopBar from "../components/header/TopBar";





const AppRouter = () => {
    return (
      <div>
        <BrowserRouter>
        <TopBar/>
    
          <Routes>
                <Route  exact path="/" element={<Home />} />
                  <Route path="/Vacay" element={<Vacay />} />   
             <Route path="*" element={<NotFound />} />

          </Routes>

        </BrowserRouter>
      </div>
    );
  };
  
  export default AppRouter;
  