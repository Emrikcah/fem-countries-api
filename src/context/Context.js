import React,{useState,useContext} from 'react'


const AppContext = React.createContext();

const AppProvider = ({children}) =>{
  //state used in themeswitcher.js and Nav.js
  const [theme, setTheme] = useState('light');
  //searchbar
  const [searchTerm, setSearchTerm] = useState('a')
  //countries
  const [countries, setCountries] = useState([])
  //loading
  const [loading, setLoading] = useState(true);
  


  return (
    <AppContext.Provider value={{theme,setTheme,searchTerm,setSearchTerm,countries,loading}}>{children}</AppContext.Provider>
  )
}

export{AppContext,AppProvider}