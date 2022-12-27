import React, { useContext, useState } from "react";
import App from "../App";

const AppContext = React.createContext(null);
const AppProvider = ({ children }) => {

    const [toggleSidebar, setToggleSidebar] = useState(false);


    const toggleSidebarShow =()=>{
        setToggleSidebar(!toggleSidebar)
    }

  return <AppContext.Provider value={{toggleSidebarShow,toggleSidebar

  }}> {children} </AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
