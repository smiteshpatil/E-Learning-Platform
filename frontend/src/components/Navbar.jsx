import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="topnav">
      <ul>
        <li className="left">
          <NavLink to="/" id="logo">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
        </li>
        <li className="left">
          <NavLink to="/">Categories</NavLink>
        </li>
        <li className="center">
          <SearchBar />
        </li>
        {isLoggedIn ? (
          <></>
        ) : (
          <li className="right login-link">
            <NavLink to="/login">LogIn/Register</NavLink>
          </li>
        )}

        <li className="right">
          <NavLink to="/user/profile">
            <VscAccount size={40} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
