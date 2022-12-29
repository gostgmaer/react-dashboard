import React, { useContext, useState } from "react";
import { useAuth } from "./Auth";

const AppContext = React.createContext(null);
const AppProvider = ({ children }) => {

const {setCurrentUser} = useAuth()


  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [islouout, setIslouout] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const changelogout = () => {
    setIslouout(!islouout);
  };
  const toggleSidebarShow = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const logout = ()=>{
    setIsloading(true)
    setCurrentUser(null)
    setSuccess(null)
    setError(null)
    sessionStorage.clear()
    localStorage.clear()
    setIsloading(false)
  }

  return (
    <AppContext.Provider
      value={{
        toggleSidebarShow,
        changelogout,
        toggleSidebar,
        islouout,
        setIslouout,
        isloading,
        setIsloading,success, setSuccess,error, setError,logout
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
