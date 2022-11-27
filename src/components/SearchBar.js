import React,{useContext} from 'react'
import { AppContext } from "../context/Context";

import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);

  return (
    <form className="mb-10 md:mb-0 ">
      <label className='relative'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-10 '>
          <FaSearch/>
        </span>
        <input className="shadow appearance-none  rounded w-full md:w-[343px] py-2 px-3  leading-tight placeholder-shown:pl-20  placeholder-light-mode-input dark:placeholder-white bg-light-mode-bg dark:bg-dark-mode-elements focus:outline-none focus:shadow-outline " id="search" type="text" placeholder="Search for a country..."></input>
      </label>
      
    </form>
  )
}

// for the form: px-4 pt-6 pb-8 mb-4
export default SearchBar