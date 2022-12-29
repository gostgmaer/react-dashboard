import React, { useContext, useState, useEffect } from "react";
import firebase from "../Utils/Authentication/Firebase";

const AuthContext = React.createContext(null);

 export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);



  const login = (user)=>{
    setCurrentUser(user)
    console.log(currentUser);
  }
 
  //   const signin = (email,pass)=>{
  // return auth.signInWithEmailAndPassword(email,pass)
    
  // }
  // const signup = (email,pass)=>{
  //   return auth.createUserWithEmailAndPassword(email,pass)
     
  //  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser,login }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };
