import React from "react";

import { Link } from "react-router-dom";

const Card = ({ name, population, region, subregion, flags }) => {
   return (
      <Link to={`/country/${name.common}`}>
         <article className="max-w-[264px] bg-white  dark:bg-dark-mode-elements rounded-lg shadow overflow-hidden">
            <img className="w-full h-40 object-cover " src={flags.svg} alt={`${name.common} flag`} />
            <div className="pt-6 pb-11 pl-6 ">
               <h2 className="font-extrabold text-light-mode-text dark:text-white text-lg pb-4">{name.common}</h2>
               <ul className="space-y-2">
                  <li className="font-semibold li-styles">
                     Population: <span className="font-light li-styles">{population}</span>{" "}
                  </li>
                  <li className="font-semibold li-styles">
                     Region: <span className="font-light li-styles">{region}</span>{" "}
                  </li>
                  <li className="font-semibold li-styles">
                     Subregion: <span className="font-light li-styles">{subregion}</span>{" "}
                  </li>
               </ul>
            </div>
         </article>
      </Link>
   );
};

export default Card;
