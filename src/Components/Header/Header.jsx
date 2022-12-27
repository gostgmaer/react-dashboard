import React from "react";
import "./header.scss";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdMenu,
  MdPerson,
  MdSearch,
} from "react-icons/md";
const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <div className="logo">Gost Dashboard</div>
        <div className="toggle">
          <MdMenu></MdMenu>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <div className="form-group">
            <input
              type="text"
              name="searchItem"
              id="searchItem"
              className="form-control"
              placeholder="Search..."
            />
            <MdSearch></MdSearch>
          </div>
        </div>
        <div className="hamburgerUser">
          <div className="dropdown">
            <div className="icons">
              <MdPerson className="person"></MdPerson>
              <MdArrowDropUp></MdArrowDropUp>
              <MdArrowDropDown></MdArrowDropDown>
            </div>
            <ul className="dropdown-menu" style={{}}>
              <li className="dropdown-item">Setting</li>
              <li className="dropdown-item">Profile</li>
              <hr />
              <li className="dropdown-item">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
