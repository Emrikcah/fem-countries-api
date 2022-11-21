import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="px-8 pt-6 pb-8 mb-4 ">
      <label className='relative'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-10 '>
          <FaSearch/>
        </span>
        <input class="shadow appearance-none  rounded w-full md:w-[343px] py-2 px-3  leading-tight placeholder-shown:pl-20  placeholder-light-mode-input dark:placeholder-white bg-light-mode-bg dark:bg-dark-mode-elements focus:outline-none focus:shadow-outline " id="search" type="text" placeholder="Search for a country..."></input>
      </label>
      
    </form>
  )
}

export default SearchBar