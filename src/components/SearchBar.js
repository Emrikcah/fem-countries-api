import React,{useContext,useRef} from 'react'
import { AppContext } from "../context/Context";

import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef('');
  
//  call this function when the user types in the input field
  const searchCountries = () => { 
    
    setSearchTerm(searchValue.current.value)
   }

  return (
    <form className="mb-10 md:mb-0 ">
      <label className='relative' htmlFor='search'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-10 '>
          <FaSearch/>
        </span>
        <input className="search-input" id="search" type="text" placeholder="Search for a country..." ref={searchValue} onChange={searchCountries}/>
      </label>
      
    </form>
  )
}

// for the form: px-4 pt-6 pb-8 mb-4
export default SearchBar