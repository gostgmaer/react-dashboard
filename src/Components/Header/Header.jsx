import React, { Fragment, useState } from "react";
import "./header.scss";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdMenu,
  MdPerson,
  MdSearch,
} from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
const Header = ({}) => {
  const { islouout, toggleSidebarShow, setIslouout } = useGlobalContext();
  const {currentUser} = useAuth()

  const [hamburger, setHamburger] = useState(false);


  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const RightElements = () => {
    return (
      <Fragment>
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
            <div className="icons" onClick={() => setHamburger(!hamburger)}>
              <MdPerson className="person"></MdPerson>
              {hamburger ? (
                <MdArrowDropUp></MdArrowDropUp>
              ) : (
                <MdArrowDropDown></MdArrowDropDown>
              )}
            </div>
            <ul
              className="dropdown-menu"
              style={hamburger ? { display: "block" } : {}}>
              <li className="dropdown-item">
                <Link to={"/setting"}>Setting</Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/profile"}>Profile</Link>
              </li>
              <hr />
              <li className="dropdown-item" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="Header">
      <div className="left">
        <div className="logo">Gost Dashboard</div>
        <div className="toggle">
          {currentUser===null ? "" : <MdMenu onClick={toggleSidebarShow}></MdMenu>}
        </div>
      </div>
      <div className="right">
        {currentUser===null ? (
          <div className="hamburgerUser">
            {" "}
            <div className="icons">
              <Link to={"/login"}>
                <MdPerson className="person"></MdPerson>
              </Link>
            </div>
          </div>
        ) : (
          <RightElements></RightElements>
        )}
      </div>
    </div>
  );
};

export default Header;
