import logo from "./logo.svg";
import "./App.scss";
import MoonLoader from "react-spinners/MoonLoader";
import Spinner from "react-spinkit";
import React from "react";
import Loading from "./Utils/Loading/Loading";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppRouting from "./Utils/Routing/AppRouting";

function App() {
  return (
    <div className="App">
    <main>
    <header><Header></Header></header>
    <div className="container"> <Sidebar></Sidebar>
    <div className="elements"> <AppRouting></AppRouting></div>
     </div>
     
    </main>
    </div>
  );
}

export default App;
