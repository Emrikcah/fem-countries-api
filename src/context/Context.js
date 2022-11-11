import React,{useState,useContext} from 'react'

const AppContext = React.createContext();



const AppProvider = ({children}) =>{
  //state used in themeswitcher.js and Nav.js
  const [theme, setTheme] = useState('light');


  return (
    <AppContext.Provider value={{theme,setTheme}}>{children}</AppContext.Provider>
  )
}

export{AppContext,AppProvider}