import React, { useState,useEffect,useContext } from 'react'
import { FaRegMoon,FaSun } from "react-icons/fa";
import { AppContext } from '../context/Context';

const ThemeSwitcher = () => {

  const {theme,setTheme} = useContext(AppContext);
 
  //  const [theme, setTheme] = useState(null);
   
   useEffect(() => {
      window.matchMedia("perfer-color-scheme: dark").matches ? setTheme('dark'): setTheme('light')
   }, [])

   useEffect(()=>{
      theme === 'dark' ? document.documentElement.classList.add('dark'):
      document.documentElement.classList.remove('dark')
   },[theme])

   const switchTheme = () => setTheme(theme === 'dark'? 'light' : 'dark');
   

  return (
    <button onClick={switchTheme} className='text-yellow-500 dark:text-white'>
      {theme === 'dark' ? <FaRegMoon/> : <FaSun/>}
    </button>
  )
}

export default ThemeSwitcher