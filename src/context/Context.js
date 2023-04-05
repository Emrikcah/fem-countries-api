import React, { useState, useEffect, createContext } from "react";

const url = "https://restcountries.com/v3.1";

const AppContext = createContext();

const AppProvider = ({ children }) => {
   //state used in themeswitcher.js and Nav.js
   const [theme, setTheme] = useState("light");
   //searchbar
   const [searchTerm, setSearchTerm] = useState('a');
   //countries
   const [countries, setCountries] = useState([]);
   //loading
   const [loading, setLoading] = useState(true);


   /*************get all countries ****************/
   const getAllCountries = async () => {
      setLoading(true);
      try {
         const res = await fetch(`${url}/all`);
         const data = await res.json();

         /**map over the data and destructure what I need and pass to setcountries */
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
   /************* end get all countries ****************/

   /************* search countries *********************/
   const searchCountry = async () => {
      try {
         const res = await fetch(`${url}/name/${searchTerm}`);
         const data = await res.json();
         if (data) {
            setCountries(data)
         } else {
            setCountries([]);
         }
         setLoading(false)
      } catch (error) {
         console.log(error);
         setLoading(false)
      }
   };

   /************* end search countries *********************/

   /***************** Hooks ********************/
   useEffect(() => {
      getAllCountries();
   }, []);

   useEffect(() => {
      searchCountry();
   }, [searchTerm]);
   /***************** end Hooks ********************/

   return <AppContext.Provider value={{ theme, setTheme, searchTerm, setSearchTerm, countries, loading }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
