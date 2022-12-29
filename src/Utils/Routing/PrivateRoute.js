import React, { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import { AuthContext, AuthProvider } from "../../Context/Auth";



const PrivateRoute = ({components: RouteComponents,...rest}) => {
    const {currentUser} = useContext(AuthContext)
  return (
   <Fragment>
    <Routes    {...rest} 
// @ts-ignore
    render ={routeProps =>!!currentUser?(<RouteComponents {...routeProps} />):(<Route to={'/login'}/>)} />
   </Fragment>
  )
}

export default PrivateRoute