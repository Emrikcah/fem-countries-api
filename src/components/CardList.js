import React from 'react'
import Card from './Card'
import FilterBox from './FilterBox'
import SearchBar from './SearchBar'

const CardList = () => {
  return (
    <section>
      <div>
         <SearchBar/>
         <FilterBox/>
      </div>
      CardList
    </section>
  )
}

export default CardList