import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Context";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = () => {
   //theme is coming from the themeswitcher component
   const { theme } = useContext(AppContext);

   return (
      <nav className="shadow-md">
         <div className="container mx-auto bg-red-600">
            <div className="flex justify-between items-center py-[30px] px-4 md:py-6 md:px-20">
               <Link to="/">
                  <h1 className="text-sm md:text-2xl font-extrabold text-light-mode-text dark:text-white">Where in the world?</h1>
               </Link>

               <div className="flex items-center gap-x-1">
                  <ThemeSwitcher />
                  <p className="text-light-mode-text dark:text-white text-xs md:text-base font-semibold">
                     {theme === "light" ? "Light" : "Dark"} Mode
                  </p>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Nav;

//theme state must be sent here
