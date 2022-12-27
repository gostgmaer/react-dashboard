
import "./App.scss";
import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppRouting from "./Utils/Routing/AppRouting";
import OutsideAppRouting from "./Utils/Routing/OutsideAppRouting";

function App() {
  return (
    <div className="App">
    <main>
     
    <header className="headerBlock"><Header></Header></header>
    <div className="container"> <Sidebar></Sidebar>
    <div className="elements"> <AppRouting></AppRouting></div>
     </div>
     
    </main>
    </div>
  );
}

export default App;
