import React, { useContext, useState, useEffect } from "react";
import firebase from "../Utils/Authentication/Firebase";

const AuthContext = React.createContext(null);

 export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);



  const login = (user)=>{
    setCurrentUser(user)
    console.log(currentUser);
  }
  const logout = ()=>{
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };
