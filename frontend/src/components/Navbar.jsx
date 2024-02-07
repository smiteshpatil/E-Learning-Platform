import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import { VscAccount } from "react-icons/vsc";
import Button from "./Button";

const Navbar = () => {
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
        <li className="right">
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className="right">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li className="right">
          <NavLink to="/account">
            <VscAccount size={45} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
