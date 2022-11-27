import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   //state used in themeswitcher.js and Nav.js
   const [theme, setTheme] = useState("light");
   //searchbar
   const [searchTerm, setSearchTerm] = useState("");
   //countries
   const [countries, setCountries] = useState([]);
   //loading
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getCountries();
   }, []);

   /*************get countries ****************/
   const getCountries = async () => {
      setLoading(true);
      try {
         const res = await fetch(url);
         const data = await res.json();

         /**map over the data and destructure what I need and return it */
         const newCountries = data.map((item) => {
            const { name, population, region, subregion, flags } = item;
            return { name, population, region, subregion, flags };
         });

         setCountries(newCountries);
         setLoading(false);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   };

   return <AppContext.Provider value={{ theme, setTheme, searchTerm, setSearchTerm, countries, loading }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
