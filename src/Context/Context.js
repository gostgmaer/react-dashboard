import React, { useContext, useState } from "react";


const AppContext = React.createContext(null);
const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [islouout, setIslouout] = useState(false);
  const [isloadin, setIsloadin] = useState(false);

  const changelogout = ()=>{
    setIslouout(!islouout)
  }
  const toggleSidebarShow = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <AppContext.Provider value={{ toggleSidebarShow,changelogout, toggleSidebar,islouout, setIslouout,isloadin, setIsloadin }}>
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
