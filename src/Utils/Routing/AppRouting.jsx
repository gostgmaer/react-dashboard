import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
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

const AppRouting = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/sales" element={<Sales></Sales>}></Route>
        <Route path="/revinue" element={<Revinue></Revinue>}></Route>
        <Route path="/report" element={<Reports></Reports>}></Route>
        <Route path="/Charts" element={<Chart></Chart>}></Route>
        <Route path="/tables" element={<Tables></Tables>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/setting" element={<Settings></Settings>}></Route>
      </Routes>
      <Footer></Footer>
    </Fragment>
  );
};

export default AppRouting;
