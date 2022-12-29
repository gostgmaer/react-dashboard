import "./App.scss";
import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppRouting from "./Utils/Routing/AppRouting";
import OutsideAppRouting from "./Utils/Routing/OutsideAppRouting";
import { useGlobalContext } from "./Context/Context";
import Loading from "./Utils/Loading/Loading";

function App() {
  const { isloading, setIsloading} = useGlobalContext();

  // window.onclick=()=>{
  //  console.log("event" );
  // }
  return (
    <div className="App">
      <main>
      <header className="headerBlock">
              <Header ></Header>
            </header>
       
          <Fragment>
            {isloading?<Loading></Loading>: <AppRouting></AppRouting>}
           
            {/* <div className="container">
            
              <Sidebar></Sidebar>
              <div className="elements">
              
                <AppRouting></AppRouting>
              </div>
            </div> */}
          </Fragment>
      
      </main>
    </div>
  );
}

export default App;
