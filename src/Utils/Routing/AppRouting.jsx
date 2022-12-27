import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Dashboard from '../../Pages/Dashboard/Dashboard'

const AppRouting = () => {
  return (
   <Fragment>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>} ></Route>
    </Routes>
    <Footer></Footer>
   </Fragment>
  )
}

export default AppRouting