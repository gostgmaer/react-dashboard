import React, { useState } from "react";
import {
  MdAddChart,
  MdArrowDropDown,
  MdDashboard,
  MdEmojiPeople,
  MdPages,
  MdTableView,
} from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
import "./sidebar.scss";
import { MdArrowForward } from "react-icons/md";
import About from "../../Pages/Abouts/About";
import Contact from "../../Pages/Contact/Contact";
import { Data } from "../../Assets/staticData/Data";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const { toggleSidebar } = useGlobalContext();
  const [page, setPage] = useState(false);

  return (
    <div
      className="Sidebar"
      style={toggleSidebar ? { flex: 0,visibility:"hidden",width:0,overflow:"hidden"} : {}}>
      <div className="sidebarWrapper">
       <div className="sidebarTop"> <div className="core">
          <h3>Core</h3>
          <div className="element">
            <MdDashboard></MdDashboard>
            <Link to={'/'}>Dashboard</Link>
          </div>
        </div>
        <div className="pages">
          <h3>Interface</h3>
          <div className="element">
            <div onClick={() => setPage(!page)} className="elementBtn">
              <div>
                {" "}
                <MdPages></MdPages> <span>Pages</span>
              </div>
              {page ? (
                <MdArrowDropDown></MdArrowDropDown>
              ) : (
                <MdArrowForward></MdArrowForward>
              )}
            </div>
            <div
              style={page ? { display: "block" } : { display: "none" }}
              className="dropdownTree">
              <ul>
                {Data.sidebarNav.map((item)=>{
                  return  <li key={item.id}><NavLink to={item.url} >{item.text}</NavLink></li>
                })}
               
               
              </ul>
            </div>
          </div>
        </div>

        <div className="features">
         <h3>addons feature</h3>
          <div className="element">
            <MdAddChart></MdAddChart>
            <span>Charts</span>
          </div>
          <div className="element">
            <MdTableView></MdTableView>
            <span>Tables</span>
          </div>
        </div></div>
       <div className="sidebarBottom"> <div className="footer">
          <div className="footerBlock">
            <div>Loged in as</div> <div>Kishor Sarkar</div>
          </div>
        </div></div>
      </div>
    </div>
  );
};

export default Sidebar;
