import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useAuth } from "../../Context/Auth";
import { useGlobalContext } from "../../Context/Context";
import About from "../../Pages/Abouts/About";
import Chart from "../../Pages/Charts/Chart";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profiles/Profile";
import Reports from "../../Pages/Reports/Reports";
import Revinue from "../../Pages/Revinue/Revinue";
import Sales from "../../Pages/Sales/Sales";
import Settings from "../../Pages/Settings/Settings";
import Signup from "../../Pages/Signup/Signup";
import Tables from "../../Pages/Tables/Tables";
import RequiredAuth from "../Authentication/RequiredAuth";

const AppRouting = () => {
  const { islouout } = useGlobalContext();
  const {currentUser} = useAuth()

  return (
    <Fragment>
      <div className="container">
       {currentUser && <Sidebar></Sidebar>}
        <div className="elements">
          <Routes>
            <Route path="/dashboard" element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}></Route>
            {/* <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/sales" element={<Sales></Sales>}></Route>
            <Route path="/revinue" element={<Revinue></Revinue>}></Route>
            <Route path="/report" element={<Reports></Reports>}></Route>
            <Route path="/Charts" element={<Chart></Chart>}></Route>
            <Route path="/tables" element={<Tables></Tables>}></Route> */}
            <Route path="/" element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/singup" element={<Signup></Signup>}></Route>
            <Route path="/profile" element={<RequiredAuth><Profile></Profile></RequiredAuth>}></Route>
            <Route path="/setting" element={<RequiredAuth><Settings></Settings></RequiredAuth>}></Route>
          </Routes>
         {currentUser && <Footer></Footer>}
        </div>
      </div>
    </Fragment>
  );
};

export default AppRouting;
