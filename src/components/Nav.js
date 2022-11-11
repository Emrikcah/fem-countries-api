import React, { useState,useContext } from 'react'
import { AppContext } from '../context/Context'
import ThemeSwitcher from './ThemeSwitcher'

const Nav = () => {

  //theme is coming from the themeswitcher component
  const {theme} = useContext(AppContext)

  return (
    <>
    <div className='container'>
      <div className='flex justify-between items-center py-[30px] px-4'>
        <h1 className='text-sm md:text-2xl font-extrabold text-light-mode-text dark:text-white'>Where in the world?</h1>
        <div className='flex items-center gap-x-1'>
          <ThemeSwitcher />
          <p className='text-light-mode-text dark:text-white text-xs md:text-base font-semibold'>{theme === 'light' ? 'Light': 'Dark'} Mode</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav

//theme state must be sent here