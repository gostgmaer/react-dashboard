import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';

const OutsideAppRouting = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/singup" element={<Signup></Signup>}></Route>
    </Routes>
  )
}

export default OutsideAppRouting