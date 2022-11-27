import React, { useContext } from "react";
import Card from "./Card";
import FilterBox from "./FilterBox";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

import { AppContext } from "../context/Context";

const CardList = () => {
   const { loading, countries } = useContext(AppContext);

   if (loading) {
      return <Loading />;
   }

   // if (countries.length < 1) {
   //  return(
   //    <h2>No Countries to show</h2>
   //  )
   // }
   return (
      <section className="container mx-auto">
         <div className="md:flex justify-between pt-6 px-4 mb-12">
            <SearchBar />
            <FilterBox />
         </div>
         <div className="max-w-[264px] mx-auto grid gap-10">
           {countries.map(item =>{
            return <Card key={item.name.common} {...item}/>
           })}
         </div>
      </section>
   );
};

export default CardList;
